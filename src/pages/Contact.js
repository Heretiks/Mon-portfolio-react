import React, { useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';
import ReCAPTCHA from 'react-google-recaptcha';
import '../styles/global.css';

function Contact() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [isSending, setIsSending] = useState(false);
    const [success, setSuccess] = useState(false);
    const [captchaToken, setCaptchaToken] = useState(null);


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const validateForm = () => {
        const nameRegex = /^[a-zA-Z\s]{2,50}$/; // Lettres et espaces (2-50 caractères)
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Format d'email simple
        const maxMessageLength = 800; // Longueur maximale du message

        if (!nameRegex.test(formData.name)) {
            alert('Veuillez entrer un nom valide (2 à 50 lettres).');
            return false;
        }
        if (!emailRegex.test(formData.email)) {
            alert('Veuillez entrer un email valide.');
            return false;
        }
        if (formData.message.length > maxMessageLength) {
            alert(`Le message est trop long. Maximum ${maxMessageLength} caractères.`);
            return false;
        }
        if (/</.test(formData.message) || />/.test(formData.message)) {
            alert("Le message contient des caractères non autorisés.");
            return false;
        }
        return true;
    };

    const sanitizeInput = (input) => {
        return input
            .replace(/<[^>]+>/g, '') // Retire toutes les balises HTML
            .replace(/&/g, '&amp;') // Encode les caractères spéciaux
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#x27;')
            .replace(/\//g, '&#x2F;');
    };

    const handleCaptchaChange = (token) => {
        setCaptchaToken(token);
    };


    const handleSubmit = async (e) => {
        e.preventDefault();

        //Sécurité du formulaire
        if (!captchaToken) {
            alert('Veuillez compléter le reCAPTCHA.');
            return;
        }
        if (!validateForm()) {return;}

        const sanitizedData = {
            name: sanitizeInput(formData.name),
            email: sanitizeInput(formData.email),
            message: sanitizeInput(formData.message),
            'g-recaptcha-response': captchaToken // token reCAPTCHA
        };

        // EmailJS configuration
        setIsSending(true);
        try {
            const result = await emailjs.send(
                'service_lfnnnup', // service ID
                'template_og37lsc', // template ID
                sanitizedData,
                'CgtLsRoIl8NdjzEEP' // clef API
            );

            console.log('Email envoyé:', result.text);
            setSuccess(true);
        } catch (error) {
            console.error('Erreur lors de l’envoi:', error);
        } finally {
            setIsSending(false);
        }
    };

    return (
        <>
            <div className="container-contact">
                <div className="big-text-contact">
                    <h1 className="title2">Vous voulez en parler ?</h1>
                    <br />
                    <h1 className="title1">Un projet <br /> à réaliser ?</h1>
                </div>
                <div className="container-form-contact">
                    <h1 className="title-contact">Contactez-moi</h1>
                    <form className="form-container-contact" onSubmit={handleSubmit}>
                        <div className="input-container">
                            <label className="input-label" htmlFor="name">Nom :</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Entrer votre nom"
                                className="input-field"
                                required
                            />
                        </div>
                        <div className="input-container">
                            <label className="input-label" htmlFor="email">Mail :</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Entrer votre mail"
                                className="input-field"
                                required
                            />
                        </div>
                        <div className="input-container">
                            <label className="input-label" htmlFor="message">Message:</label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Dîtes-en plus :"
                                className="input-field message-field"
                                required
                            />
                        </div>

                        <div className="captcha-and-submit">
                            {!success ? (
                                <>
                                    <ReCAPTCHA
                                        sitekey="6Lcu0owqAAAAAElmKBpgtXWaz9tzvduFae_VAR-R" // Votre clé publique reCAPTCHA
                                        onChange={handleCaptchaChange} // Met à jour le token lorsqu'il est validé
                                        className="form-reCaptcha"
                                    />
                                    <button
                                        type="submit"
                                        className="submit-button"
                                        disabled={isSending}
                                    >
                                        {isSending ? 'Envoi...' : 'Envoyer'}
                                    </button>
                                </>
                            ) : (
                                <p className="success-message">Message envoyé avec succès !</p>
                            )}
                        </div>

                    </form>
                </div>
            </div>
        </>
    );
}

export default Contact;
