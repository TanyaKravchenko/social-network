import React from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {Textarea} from '../../common/FormsControls/FormsControl';
import {maxLengthCreator, required} from '../../../utils/validators/validators';

export type AddMessageFormType = {
    nameMessageBody: string
}
const maxLength50 = maxLengthCreator(50);

const AddMessageForm: React.FC<InjectedFormProps<AddMessageFormType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    component={Textarea}
                    name={'nameMessageBody'}
                    placeholder={'Enter your message'}
                    validate={[required, maxLength50]}
                />
            </div>
            <button>Send</button>
        </form>
    )
}

export const AddMessageFormRedux = reduxForm<AddMessageFormType>({form: 'dialogAddMessageForm'})(AddMessageForm)