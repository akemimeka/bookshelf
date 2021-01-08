import { saveEditedReview, getReviews } from '../../services/index.js';

export const Post = () => {
  const postContainer = document.createElement('div');
  postContainer.className = 'post-container';

  getReviews().then((reviews) => {
    for (let i in reviews) {
      let post = reviews[i].data();
      postContainer.innerHTML += `
        <article class="review-post">
          <h3 class="review-meta-info">
            <div class="meta-info-container">
              <img id="review-user-avatar_${i}" src="../../img/default_user_icon.jpg">
              <div>
                <span id="review-author-username_${i}">${post.user_information.name}</span>
                <time id="review-date_${i}">03 de Janeiro às 14:33</time>
              </div>
            </div>
            <div class="top-icons-container">
              <button id="edit-button_${i}"><i class="edit-icon fas fa-edit"></i>Editar resenha</button>
              <button id="save-button_${i}" class="hidden"><i class="check-icon fas fa-check"></i>Salvar resenha</button>
              <button id="delete-button_${i}"><i class="delete-icon fas fa-trash-alt"></i>Deletar resenha</button>
            </div>
          </h3>
          <div class="review-main-info">
            <div class="review-info-book-title">
              Livro: <span id="review-book-title_${i}">${post.title}</span>
            </div>
            <div class="review-info-book-author">
              Autor(a): <span id="review-book-author_${i}">${post.author}</span>
            </div>
            <div id="review-opinion_${i}">
              <p>${post.review}</p>
            </div>
          </div>
          <div class="like-icon-container">
            <i id="like-icon_${i}" class="far fa-heart"></i>
            <div id="review-like-count_${i}">32</div>
          </div>
        </article>
      `;

      const editButton = postContainer.querySelector('#edit-button_' + i);
      const saveButton = postContainer.querySelector('#save-button_' + i);
      const reviewBookTitle = postContainer.querySelector('#review-book-title_' + i);
      const reviewBookAuthor = postContainer.querySelector('#review-book-author_' + i);
      const reviewText = postContainer.querySelector('#review-opinion_' + i);

      const editStylingToggle = (element) => {
        element.setAttribute('contenteditable', 'true');
        element.classList.toggle('editable-content');
      };

      editButton.addEventListener('click', () => {
        const fieldList = [reviewBookTitle, reviewBookAuthor, reviewText];

        fieldList.forEach((field) => editStylingToggle(field));
        editButton.classList.toggle('hidden');
        saveButton.classList.remove('hidden');
      });

      saveButton.addEventListener('click', saveEditedReview);
    }
  });

  // const likeIcon = document.querySelector('#icon-like');
  // likeIcon.addEventListener('click', likeReview);

  // const deleteIcon = document.querySelector('#icon-delete');
  // deleteIcon.addEventListener('click', deleteReview);
  
  return postContainer;
};
