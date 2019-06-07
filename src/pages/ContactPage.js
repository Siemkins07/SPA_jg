import React from 'react';
import '../styles/ContactPage.css'
import { Prompt } from 'react-router-dom';

class ContactPage extends React.Component {
    state = {
        value: ""
    }

    handleMessageChange = (e) => {

        this.setState({
            value: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.setState({
            value: "",
        })
    }

    render() {
        return (
            <div className="contact" >
                <form>
                    <p>Zainteresowała Cię moja historia? Chcesz dowiedzieć się więcej? A może sam byłeś świadkiem lub uczestnikiem niektórych zdarzeń? Napisz do mnie, chrońmy razem tę magię od zapomnienia.</p>
                    <textarea value={this.state.value} onChange={this.handleMessageChange} placeholder="Napisz do mnie..." ></textarea>
                    <button onClick={this.handleSubmit}>Wyślij</button>
                </form>
                <Prompt
                    when={this.state.value !== ""}
                    message={"Nie wysłałeś formularza. Na pewno chcesz teraz opuścić stronę?"} />
            </div>
        )
    };
}

export default ContactPage;