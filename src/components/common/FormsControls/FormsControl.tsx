import React from 'react';
import {Field, WrappedFieldMetaProps, WrappedFieldProps} from 'redux-form';
import styles from './FormsControl.module.css'
import {FieldValidatorType, required} from '../../../utils/validators/validators';

type FormControlPropsType = {
    meta: WrappedFieldMetaProps
}

const FormControl: React.FC<FormControlPropsType> = ({meta: {touched, error}, children}) => {
    const showError = touched && error
    return (
        <div className={styles.formControl + ' ' + (showError ? styles.error : '')}>
            <div>
                {children}
            </div>
            {showError && <span>{error}</span>}
        </div>
    )
}

export const Textarea: React.FC<WrappedFieldProps> = (props) => {
    const {input, meta, ...restProps} = props;
    return <FormControl {...props}> <textarea {...input} {...restProps} /></FormControl>
}

export const Input: React.FC<WrappedFieldProps> = (props) => {
    const {input, meta, ...restProps} = props;
    return <FormControl {...props}><input {...input} {...restProps} /></FormControl>
}

export function createdField<FormKeysType extends string>(
    placeholder: string | undefined,
    name: FormKeysType,
    validators: Array<FieldValidatorType>,
    component: React.FC<WrappedFieldProps>,
    props = {},
    text = "") {
    return (
        <div>
            <Field
                placeholder={placeholder}
                name={name}
                component={component}
                {...props}
            /> {text}
        </div>
    )
}

export type GetStringKeys<T> = Extract<keyof T, string>