import { useState } from 'react'
import styles from './Pagination.module.css'

const Pagination = ({portionSize = 5, ...props}) => {

    let pagesCaunt = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for(let i = 1; i <= pagesCaunt; i++){
        pages.push(i)
    }

    let portionCaunt = Math.ceil(pagesCaunt / portionSize)
    let [portionNumber, setPortionNumber] = useState(1)
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    let rigtPortionPageNumber = portionNumber * portionSize

    return(
        <div>
            {portionNumber > 1 && <button onClick={() => setPortionNumber(portionNumber - 1)}>PRIV</button>}
            {pages.filter(page => page >= leftPortionPageNumber && page <= rigtPortionPageNumber)
            .map(page => <span onClick={() => {props.onPageChange(page)}} 
                            className={props.currentPage === page ? styles.selectPage : styles.Page}>
                                {page}
                            </span>)}
            {portionNumber < portionCaunt && <button onClick={() => setPortionNumber(portionNumber + 1)}>NEXT</button>}                    
        </div>
    )
}

export default Pagination