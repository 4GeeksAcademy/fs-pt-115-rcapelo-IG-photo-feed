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
  .querySelector('.btn.btn-success.fw-semibold')
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

// Modal dinámico
const charactersData = {
  0: {
    title: '¡El poder de Goku!',
    image: 'src/img/img1.jpg',
    alt: 'Goku - El guerrero Saiyan más poderoso',
    likes: '1,247',
    caption:
      'Goku entrenando para alcanzar nuevos niveles de poder. ¡Un verdadero guerrero Saiyan! #DragonBall #Goku #Saiyan',
    date: '08/26',
  },
  1: {
    title: 'Gohan en acción',
    image: 'src/img/img2.jpg',
    alt: 'Gohan - El hijo prodigio de Goku',
    likes: '892',
    caption:
      'El hijo prodigio demuestra su increíble potencial. ¡El futuro está en buenas manos! #Gohan #Prodigio #DragonBall',
    date: '08/25',
  },
  2: {
    title: 'El Príncipe Vegeta',
    image: 'src/img/img3.jpg',
    alt: 'Vegeta - El príncipe de los Saiyans',
    likes: '1,845',
    caption:
      'El orgullo Saiyan en su máxima expresión. ¡Nadie supera al Príncipe! #Vegeta #PrincipeSaiyan #Orgullo',
    date: '08/24',
  },
  3: {
    title: 'Trunks del Futuro',
    image: 'src/img/img4.jpg',
    alt: 'Trunks - El joven guerrero del futuro',
    likes: '756',
    caption:
      'El guerrero que vino del futuro para salvar el mundo. ¡Esperanza y valentía! #Trunks #Futuro #Esperanza',
    date: '08/23',
  },
  4: {
    title: 'Milk la Guerrera',
    image: 'src/img/img5.jpg',
    alt: 'Milk - La esposa guerrera de Goku',
    likes: '623',
    caption:
      'La mujer más fuerte del universo (¡pregúntenle a Goku!). Madre, esposa y guerrera. #Milk #Familia #Fuerza',
    date: '08/22',
  },
  5: {
    title: 'Bulma Genius',
    image: 'src/img/img6.jpg',
    alt: 'Bulma - La genio científica de Capsule Corp',
    likes: '1,156',
    caption:
      'La mente más brillante detrás de toda la tecnología. ¡Capsule Corp forever! #Bulma #Ciencia #Tecnología #CapsuleCorp',
    date: '08/21',
  },
}

document
  .getElementById('postModal')
  .addEventListener('show.bs.modal', function (event) {
    const button = event.relatedTarget
    const postNumber = button.getAttribute('data-post')
    const character = charactersData[postNumber]

    if (character) {
      this.querySelector('.modal-title').textContent = character.title
      this.querySelector('.text-muted').textContent = character.date
      const modalImg = this.querySelector('img')
      modalImg.src = character.image
      modalImg.alt = character.alt
      this.querySelector('.fw-semibold').textContent =
        character.likes + ' Likes'
      this.querySelector('.text-dark:last-child').textContent =
        character.caption
    }
  })
