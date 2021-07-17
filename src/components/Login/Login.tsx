import React from 'react';
import {InjectedFormProps, reduxForm} from 'redux-form';
import {createdField, Input} from '../common/FormsControls/FormsControl';
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
    error: boolean
}

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = ({handleSubmit, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            {createdField('Email', 'email', [required],  Input)}
            {createdField('Password', 'password', [required],  Input, {type: 'password'})}
            {createdField(undefined, 'rememberMe', [],  Input, {type: 'checkbox'}, "remember me")}

            {/*<div>*/}
            {/*    <Field*/}
            {/*        placeholder={'Email'}*/}
            {/*        name={'email'}*/}
            {/*        component={Input}*/}
            {/*        validate={[required]}/>*/}
            {/*</div>*/}
            {/*<div>*/}
            {/*    <Field*/}
            {/*        placeholder={'Password'}*/}
            {/*        name={'password'}*/}
            {/*        component={Input}*/}
            {/*        type={'password'}*/}
            {/*        validate={[required]}/>*/}
            {/*</div>*/}
            {/*<div>*/}
            {/*    <Field*/}
            {/*        component={Input}*/}
            {/*        name={'rememberMe'}*/}
            {/*        type={'checkbox'}/>*/}
            {/*    rememberMe*/}
            {/*</div>*/}

            {error && <div className={styles.formSummaryError}>
                {error}
            </div>}
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

const Login: React.FC<LoginPropsType> = ({login, isAuth}) => {
    const onSubmit = (formData: FormDataType) => {
        login(formData.email, formData.password, formData.rememberMe)
    }

    if (isAuth) {
        return <Redirect to={'/profile'}/>
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