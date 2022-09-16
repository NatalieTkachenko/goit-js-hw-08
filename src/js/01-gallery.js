import SimpleLightbox from 'simplelightbox';
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);



const gallery = document.querySelector( '.gallery' );
console.log( gallery );

const collection = galleryItems.map( ( { preview, original, description } ) =>
{
  const galleryImage = document.createElement( 'img' );
  galleryImage.classList.add( 'gallery__image' );
  galleryImage.setAttribute( 'src', `${preview}` );
  galleryImage.setAttribute( 'alt', `${description}` );

  const galleryItem = document.createElement( 'a' );
  galleryItem.classList.add( 'gallery__item' );
  galleryItem.setAttribute( 'href', `${original}` );
  galleryItem.appendChild( galleryImage );

  return galleryItem;

} );

gallery.append( ...collection );



console.log( galleryItems );

gallery.addEventListener( 'click', openModalHandler );

const lightbox = new SimpleLightbox( '.gallery__item',
    {
      captions: true,
      captionsData: 'alt',
      captionPosition: 'bottom',
      captionDelay: 250,
    });


function openModalHandler( evt )
{
  event.preventDefault();
  if ( event.target.nodeName !== 'IMG' )
  {
    return;
  }
  
     return lightbox;
};
