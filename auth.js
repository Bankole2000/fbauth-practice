// add admin cloud function 
const adminForm = document.querySelector('.admin-actions');
adminForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const adminEmail = document.querySelector('#admin-email').value;
  const addAdminRole = functions.httpsCallable('addAdminRole');
  addAdminRole({ email: adminEmail })
    .then(result => {
      console.log(result);
      M.toast({ html: `${adminEmail} has been made an admin`});
      adminForm.reset();
    });
})

// listen for auth status changes
auth.onAuthStateChanged(user => {
  console.log(user);
  if(user) {
    user.getIdTokenResult()
      .then(idTokenResult => {
        console.log(idTokenResult.claims);
        console.log(`user is admin? ${idTokenResult.claims.admin}`);
        user.admin = idTokenResult.claims.admin
      })
    console.log('user logged in:', user);
    // Get Data 
    db.collection('guides').onSnapshot((snapshot) => {
      console.log(snapshot.docs);
      setupGuides(snapshot.docs, user.admin);
      setupUI(user);
    }, err => {
      console.log(err.message);
    })
  } else {
    setupGuides([]);
    setupUI();
  }
})

// create new Guide
const createForm = document.querySelector('#create-form');
createForm.addEventListener('submit', (e) => {
  e.preventDefault();
  db.collection('guides').add({
    title: createForm['title'].value,
    content: createForm['content'].value
  })
    .then(() => {
      createForm.reset();
      const modal = document.querySelector('#modal-create');
      M.Modal.getInstance(modal).close();
      M.toast({ html: 'New Guide added' });
    })
    .catch(err => console.log(err.message));
})

// Populate Update Form 
const updateForm = document.querySelector('#update-form');
const populateUpdateGuideForm = (id, store) => {
  console.log(id, store);
  const guideToUpdate = store.find(guide => guide.id === id);
  updateForm['edit-title'].value = guideToUpdate.title;
  updateForm['edit-content'].value = guideToUpdate.content;
  updateForm['edit-guide-id'].value = guideToUpdate.id;
  console.log(`update form updated`);
  M.updateTextFields();
  // db.collection('guides').doc(id).get()
  //   .then((doc) => {
  //     if (doc.exists) {
  //       const guide = doc.data();
  //       updateForm['edit-title'].value = guideToUpdate.title;
  //       updateForm['edit-content'].value = guideToUpdate.content;
  //       updateForm['edit-guide-id'].value = guideToUpdate.id;
  //       console.log(`update form updated`);
  //       M.updateTextFields();
  //     }
  //   })
}

// Update Guide
updateForm.addEventListener('submit', (e) => {
  e.preventDefault();
  id = updateForm['edit-guide-id'].value;
  title = updateForm['edit-title'].value;
  title = title.trim();
  content = updateForm['edit-content'].value;
  content = content.trim();
  if (title && content) {
    console.log('Updated');
    console.table({title, content});
    db.collection('guides').doc(id).update({
      title,
      content,
    })
      .then(() => {
        M.toast({ html: '<i class="mdi mdi-check"></i> Guide Updated' });
        updateForm.reset();
        const modal = document.querySelector('#modal-edit');
        M.Modal.getInstance(modal).close();
      })
  } else {
    console.log('Insufficient Details');
    M.toast({ html: '<i class="mdi mdi-close-circle"></i> Incomplete Details'})
  }
})

// Delete Guide
const deleteForm = document.querySelector('#delete-form');
deleteForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const id = deleteForm['delete-guide-id'].value;
  db.collection('guides').doc(id).delete()
    .then(() => {
      console.log(`deleted ${id}`);
      M.toast({ html: '<i class="mdi mdi-check-circle mdi-24px"></i> &nbsp; Guide Deleted' });
      const modal = document.querySelector('#modal-delete');
      M.Modal.getInstance(modal).close();
    });  
})

// Update Delete Modal 
updateDeleteModal = (id, store) => {
  const guide = store.find(guide => guide.id === id);
  document.querySelector('#delete-guide-name').innerHTML = `Delete 👉 ${guide.title}`;
  deleteForm['delete-guide-id'].value = guide.id;
  console.log('Modal updated');
}

// Signup
const signupForm = document.querySelector('#signup-form');
signupForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // Get user info
  const email = signupForm['signup-email'].value;
  const password = signupForm['signup-password'].value;

  console.log(email, password);

  // Sign up the user
  auth.createUserWithEmailAndPassword(email, password)
    .then((cred) => {
      console.log(cred, cred.user);
      return db.collection('users').doc(cred.user.uid).set({
        bio: signupForm['signup-bio'].value,
      });
    })
    .then(() => {      
      const modal = document.querySelector('#modal-signup');
      M.toast({ html: '<i class="mdi mdi-check green-text"></i>Signup Successful!'})
      M.Modal.getInstance(modal).close();
      signupForm.reset();
      signupForm.querySelector('.error').innerHTML = '';
    })
    .catch(err => {
      signupForm.querySelector('.error').innerHTML = err.message;
    });
})

// logout method
const logoutBtns = document.querySelectorAll('.logout');
logoutBtns.forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    auth.signOut()
    .then(() => {
      console.log('User is Logged out');
      M.toast({ html: '<i class="mdi mdi-logout-variant red-text"></i> You Logged out'});
    })
  })
})
// logout.addEventListener('click', (e) => {
//   e.preventDefault();
//   auth.signOut()
//     .then(() => {
//       console.log('User is Logged out');
//     })
// }); 

// Login Method
const loginForm = document.querySelector('#login-form');
loginForm.addEventListener('submit', (e) => {
  e.preventDefault(0);

  // get user Info
  const email = loginForm['login-email'].value;
  const password = loginForm['login-password'].value;
  auth.signInWithEmailAndPassword(email, password)
    .then((cred) => {
      console.log(cred, cred.user);
      M.toast({ html:'<i class="mdi mdi-check green-text"></i> Login Successful'});
      const modal = document.querySelector('#modal-login');
      M.Modal.getInstance(modal).close();
      loginForm.reset();
      loginForm.querySelector('.error').innerHTML = '';
     })
    .catch(err => {
      loginForm.querySelector('.error').innerHTML = err.message;
    })
})