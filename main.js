// Cambio de vista
const gridViewBtn = document.getElementById('gridView')
const listViewBtn = document.getElementById('listView')
const gridContent = document.getElementById('gridContent')
const listContent = document.getElementById('listContent')

gridViewBtn.addEventListener('click', function () {
  gridViewBtn.classList.add('active', 'btn-primary')
  gridViewBtn.classList.remove('btn-outline-secondary')
  listViewBtn.classList.remove('active', 'btn-primary')
  listViewBtn.classList.add('btn-outline-secondary')
  gridContent.style.display = 'block'
  listContent.style.display = 'none'
})

listViewBtn.addEventListener('click', function () {
  listViewBtn.classList.add('active', 'btn-primary')
  listViewBtn.classList.remove('btn-outline-secondary')
  gridViewBtn.classList.remove('active', 'btn-primary')
  gridViewBtn.classList.add('btn-outline-secondary')
  gridContent.style.display = 'none'
  listContent.style.display = 'block'
})

// Like button
document.querySelectorAll('.action-btn').forEach((btn) => {
  if (btn.querySelector('.fa-heart')) {
    btn.addEventListener('click', function () {
      const icon = btn.querySelector('i')
      if (icon.classList.contains('far')) {
        icon.classList.remove('far')
        icon.classList.add('fas')
        icon.style.color = '#ed4956'
      } else {
        icon.classList.remove('fas')
        icon.classList.add('far')
        icon.style.color = ''
      }
    })
  }
})

// Publish button
document
  .querySelector('.btn.btn-primary.fw-semibold')
  .addEventListener('click', function () {
    const caption = document.getElementById('postCaption').value
    if (caption.trim()) {
      alert('Post published successfully!')
      document.getElementById('postCaption').value = ''
      bootstrap.Modal.getInstance(
        document.getElementById('createPostModal')
      ).hide()
    } else {
      alert('Please add a caption to your post')
    }
  })

// DROPDOWN

document.addEventListener('DOMContentLoaded', function () {
  const logoutLink = document.querySelector('.dropdown-item.text-danger')

  if (logoutLink) {
    logoutLink.addEventListener('click', function (e) {
      e.preventDefault()
      if (confirm('¿Estás seguro de que quieres cerrar sesión?')) {
        alert('Sesión cerrada exitosamente')
      }
    })
  }

  const profileLink = document.querySelector('.dropdown-item[href="#"]')
  if (profileLink && profileLink.textContent.includes('Profile')) {
    profileLink.addEventListener('click', function (e) {
      e.preventDefault()
      alert('Función de perfil - En desarrollo')
    })
  }
})
