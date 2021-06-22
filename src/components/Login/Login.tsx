import React from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {Input} from '../common/FormsControls/FormsControl';
import {required} from '../../utils/validators/validators';
import styles from '../common/FormsControls/FormsControl.module.css';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {AppStateType} from '../../redux/redux-store';
import {login} from '../../redux/auth-reducer';

type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
}

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'email'} name={'email'} component={Input} validate={[required]}/>
            </div>
            <div>
                <Field placeholder={'password'} name={'password'} component={Input} validate={[required]}/>
            </div>
            <div>
                <Field component={Input} name={'rememberMe'} type={'checkbox'}/>rememberMe
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)

type LoginPropsType = {
    login: (email: string, password: string, rememberMe: boolean) => void
    isAuth: boolean | null
}

const Login: React.FC<LoginPropsType> = (props) => {
    const onSubmit = (formData: FormDataType) => {
        debugger
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth) {
        return <Redirect to={'/profile'} />
    }
    return (
        <div className={styles.formControlWrapper}>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}
const mapStateToProps = (state: AppStateType) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login);