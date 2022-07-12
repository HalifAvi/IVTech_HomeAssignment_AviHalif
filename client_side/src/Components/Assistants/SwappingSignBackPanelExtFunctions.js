
    export const moveToSignUp = (setMessageAfterSign) => {

        setMessageAfterSign("");

        (document.querySelector('.swappingSignFrontPanel-formBx')).classList.add('active');
        (document.querySelector('#signinSignupForm-section ')).classList.add('active');

        removeMessageBackgroundColor();
    }

    export const moveToSignIn = (setMessageAfterSign) => {

        setMessageAfterSign("");

        (document.querySelector('.swappingSignFrontPanel-formBx')).classList.remove('active');
        (document.querySelector('#signinSignupForm-section ')).classList.remove('active');

        removeMessageBackgroundColor();

    }

    const removeMessageBackgroundColor = () => {

        const messageTitles = (document.querySelectorAll('#swappingSignBackPanel-signMessage-title'));

        [...messageTitles].map(item=>{

            item.removeAttribute("style");
        })
    }