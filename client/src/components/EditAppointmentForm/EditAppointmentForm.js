import React from 'react';


export default class EditAppointmentForm extends React.Component {

    state = {
        title: '',
        error: ''
    };

    onTitleChange = (e) => {
        const title = e.target.value;
        this.setState(() => ({ title }));
    };

    onSubmit = (e) => {
        e.preventDefault();

        if (!this.state.title) {
            this.setState(() => ({ error: 'Please provide description and amount' }))
        } else {
            this.setState(() => ({ error: '' }))
            this.props.onSubmit({
                title: this.state.title
            });
        }
    };

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <input
                        type="text"
                        placeholder="Client Name"
                        autoFocus
                        value={this.state.title}
                        onChange={this.onTitleChange}
                    />
                    <button>Book Appointment</button>
                </form>
            </div>
        )
    }
}