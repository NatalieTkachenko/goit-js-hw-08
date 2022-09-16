import throttle from 'lodash.throttle'

const form = document.querySelector( 'form' );
const input = document.querySelector( 'input' );
const textarea = document.querySelector( 'textarea' );

console.log( form );
console.log( input );
console.log( textarea );

input.addEventListener( 'input', inputHandler );
textarea.addEventListener( 'input', inputHandler );
form.addEventListener( 'submit', formDataHandler );


function inputHandler( event )
{
    const userData = {
        email: input.value,
        message: textarea.value,
    }

    localStorage.setItem( "feedback-form-state", JSON.stringify( userData ) );
};

function happyToHaveYouBack()
{
    if ( localStorage.getItem( "feedback-form-state" ) )
    {
        console.log( "Hey, man, you have done some job before, let's use it;)" );
        const doneJob = JSON.parse( localStorage.getItem( "feedback-form-state" ) );
        console.log( doneJob );
        input.value = doneJob.email;
        textarea.value = doneJob.message;
    }
}
happyToHaveYouBack();

function formDataHandler(event) {
    event.preventDefault();
    const submitedData = {
        email: input.value,
        message: textarea.value,
    }

    console.log( submitedData );

    event.target.reset();
    localStorage.clear();

}