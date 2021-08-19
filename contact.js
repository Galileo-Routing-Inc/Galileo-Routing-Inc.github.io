/*
$(document).ready(function(){
    
    (function($) {
        "use strict";

    
    jQuery.validator.addMethod('answercheck', function (value, element) {
        return this.optional(element) || /^\bcat\b$/.test(value)
    }, "type the correct answer -_-");

    // validate contactForm form
    $(function() {
        $('#contactForm').validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                subject: {
                    required: true,
                    minlength: 4
                },
                number: {
                    required: true,
                    minlength: 5
                },
                email: {
                    required: true,
                    email: true
                },
                message: {
                    required: true,
                    minlength: 20
                }
            },
            messages: {
                name: {
                    required: "come on, you have a name, don't you?",
                    minlength: "your name must consist of at least 2 characters"
                },
                subject: {
                    required: "come on, you have a subject, don't you?",
                    minlength: "your subject must consist of at least 4 characters"
                },
                number: {
                    required: "come on, you have a number, don't you?",
                    minlength: "your Number must consist of at least 5 characters"
                },
                email: {
                    required: "no email, no message"
                },
                message: {
                    required: "um...yea, you have to write something to send this form.",
                    minlength: "thats all? really?"
                }
            },
            submitHandler: function(form) {
                console.log(form);
            }
        })
    })
        
 })(jQuery)
})
*/

const NEWLINE_ENCODING = '%0A'

function onContactBtnClick() {

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const school = document.getElementById("school").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    const body = `${NEWLINE_ENCODING}${message}${NEWLINE_ENCODING}${NEWLINE_ENCODING}From,${NEWLINE_ENCODING}${name}${NEWLINE_ENCODING}${school}${NEWLINE_ENCODING}${email}${NEWLINE_ENCODING}`;
    
    window.location.href = `mailto:galileorouting@gmail.com?subject=${subject}&body=${body}`;
}