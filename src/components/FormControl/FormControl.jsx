import styles from './FormControl.module.css'

export const Textarea = ({input, meta, ...props}) => {

    let hasError = (meta.error && meta.touched)

    return(
        <div className={styles.formControl + ' ' + (hasError ? styles.error : '')}>
            <div>
                <textarea  {...input} {...props}/>
            </div>
            {hasError && <span className={styles.textError}>{meta.error}</span>}
        </div>
        
    )
}

export const Input = ({input, meta, ...props}) => {

    let hasError = (meta.error && meta.touched)

    return(
        <div className={styles.formControl + ' ' + (hasError ? styles.error : '')}>
            <div >
                <input type='text'  {...input} {...props}/>
            </div>
            {hasError && <span className={styles.textError}>{meta.error}</span>}
        </div>
        
    )
}