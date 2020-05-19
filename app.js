const guideList = document.querySelector('.guides');
const loggedOutLinks = document.querySelectorAll('.logged-out');
const loggedInLinks = document.querySelectorAll('.logged-in');
const accountDetails = document.querySelector('.account-details');
const adminItems = document.querySelectorAll('.admin');
const userImage = document.querySelector('#user-image');
const userRole = document.querySelector('#user-role');
const userEmail = document.querySelector('#user-email');
let updateBtns, deleteBtns, store = [];

const setupUI = (user) => {
  if (user) {
    // Check if User is Admin
    if(user.admin) {
      adminItems.forEach(item => item.style.display = 'block');
    }
    // toggle ui elements
    loggedInLinks.forEach(link => link.style.display = 'block')
    loggedOutLinks.forEach(link => link.style.display = 'none')
    
    // get and show account details
    // get bio
    const gravatar = MD5(user.email.trim().toLowerCase());
    user.image = `https://www.gravatar.com/avatar/${gravatar}`;
    db.collection('users').doc(user.uid).get()
      .then(doc => {
        userImage.setAttribute('src', user.image);
        userRole.innerHTML = `${ user.admin ? '<i class="mdi mdi-shield-account"></i> Admin':'<i class="mdi mdi-account-circle"></i> Member'}`;
        userEmail.innerHTML = user.email
        html = `
          <div class="card-panel grey lighten-5 z-depth-1">
            <div class="row valign-wrapper" style="margin-bottom: 0;">
              <div class="col s2">
                <img src="${user.image}" alt="" class="circle responsive-img"> <!-- notice the "circle" class -->
              </div>
              <div class="col s10">
                <p>Logged in as</p>
                <h4 class="black-text">
                  ${user.email}
                </h4>
                <p>${doc.data().bio} - <span class="blue-text">${ user.admin ? '<i class="mdi mdi-shield-account"></i> Admin':'<i class="mdi mdi-account-circle"></i> Member'}</span></p>
              </div>
            </div>
          </div>
        `;       
        accountDetails.innerHTML = html;
        enableUpdateBtns(store, user.admin);
      })
  } else {
    loggedInLinks.forEach(link => link.style.display = 'none')
    loggedOutLinks.forEach(link => link.style.display = 'block')
    adminItems.forEach(item => item.style.display = 'none');
    userImage.setAttribute('src', 'img/default.png');
    userRole.innerHTML = 'Not Logged In';
    userEmail.innerHTML = 'Please Login or Signup';
    html = `
    <div class="card-panel grey lighten-5 z-depth-1">
      <div class="row valign-wrapper" style="margin-bottom: 0;">
        <div class="col s2">
          <img src="img/logo.svg" alt="" class="circle responsive-img"> <!-- notice the "circle" class -->
        </div>
        <div class="col s10">
          <h4 class="black-text">
            Not Logged in
          </h4>
        </div>
      </div>
    </div>
    `;
    accountDetails.innerHTML = html;
  }
}

// Add event listers to enable Update and Delete Buttons
const enableUpdateBtns = (data, isAdmin) => {
  console.log(data, isAdmin);
  if (isAdmin) {
    updateBtns = document.querySelectorAll('.edit');
    updateBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        populateUpdateGuideForm(btn.id, data);
        console.log(`update ${btn.id}`);
      })      
    });
    deleteBtns = document.querySelectorAll('.delete');
    deleteBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        updateDeleteModal(btn.id, data);
        console.log(`delete ${btn.id}`)
      })
    })
    console.log(updateBtns, deleteBtns);
  }  
} 

// Setup guides
const setupGuides = (data, isAdmin) => {
  let html = '';
  store = [];
  if (data.length > 0) { 
    console.log('this fired');
    data.forEach(doc => {
      const guide = doc.data();
      guide.id = doc.id;
      store.push(guide);
      console.log(store);
      const li = `
        <li>
          <div class="collapsible-header grey lighten-4 valign-wrapper"><a href="#" style="display: ${ isAdmin ? 'block': 'none'};" class="edit modal-trigger" id="${ isAdmin? doc.id: ''}" data-target="modal-edit"><i class="mdi mdi-square-edit-outline teal-text"></i></a><a href="#" style="display: ${ isAdmin ? 'block': 'none'};" class="delete modal-trigger" id=${isAdmin ? doc.id : ''} data-target="modal-delete"><i class="mdi mdi-trash-can-outline red-text"></i></a>${guide.title}</div>
          <div class="collapsible-body white"><span>${guide.content}</span></div>
        </li>
      `;
      html += li;
    });
  } else {
    console.log('not logged in');
    store.length = 0;
    html += `
    <li>
      <div class="collapsible-header grey lighten-4">Not Logged In</div>
      <div class="collapsible-body white"><span>Please Signup Or Log in to view game data</span></div>
    </li>
    `;
  }
  guideList.innerHTML = html;
}

M.AutoInit();