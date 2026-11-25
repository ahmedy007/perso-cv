const quizForm = document.querySelector("#quiz-form");

if (quizForm) {
    quizForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const questions = [...quizForm.querySelectorAll(".question")];
        const score = questions.reduce((total, question) => {
            const correctAnswers = [...question.querySelectorAll("input[data-correct]")];
            const selectedAnswers = [...question.querySelectorAll("input:checked")];
            const isCorrect = correctAnswers.length === selectedAnswers.length
                && correctAnswers.every((answer) => answer.checked);

            return total + Number(isCorrect);
        }, 0);

        const result = document.querySelector("#quiz-result");
        result.textContent = `Résultat : ${score}/${questions.length} points. ${
            score === questions.length ? "Excellent, toutes les réponses sont correctes !" : "Vous pouvez modifier vos réponses et réessayer."
        }`;
        result.classList.add("is-visible");
    });
}

const contactForm = document.querySelector("#contact-form");

if (contactForm) {
    contactForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const formData = new FormData(contactForm);
        const name = formData.get("name").toString().trim();
        const email = formData.get("email").toString().trim();
        const subject = formData.get("subject").toString().trim();
        const message = formData.get("message").toString().trim();
        const body = `Nom : ${name}\nE-mail : ${email}\n\n${message}`;
        const mailto = `mailto:ahmedyassinechouria@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        document.querySelector("#contact-status").textContent = "Votre application de messagerie va s'ouvrir pour envoyer le message.";
        window.location.href = mailto;
    });
}
