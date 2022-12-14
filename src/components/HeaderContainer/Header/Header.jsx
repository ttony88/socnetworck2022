import styles from './Header.module.css'
import { NavLink } from 'react-router-dom'

const Header  = (props) => {
    return (
        <header className={styles.header}>
            <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHwAAAB8CAMAAACcwCSMAAAAe1BMVEUJVKD///8AT55mhbgAUp8AQpkATJ0ASpwAR5sARZoAO5YAQJjE0eTs8PYAPZd1kb/e5vBVfLQtYKb09/oANZSKocehs9J7l8LS2+lHcK7m6/MAOJWsvNejuNW4xt3L1uaUqMs1aKofWqNSdbBpi7uVr9FjfrR0i7wAHY0i9eRZAAAG20lEQVRoge2ZeZOqOBDAQ+7IHSQcAnJ47Pf/hNsJzjzfiIpbW/tqq+g/HETIr5O+kh6E/phg8ufYG3yDb/ANvsE3+Abf4Bt8g2/wDb7BN/gG3+Ab/GOhFN+EUvpfwTEWKjowNFTphYBcpkrjaOdLjj9U4iM4pVypcbr2XRlmmXcnWZYEbUEGzgRer8B6OMWSD6e2DG+4sE6S0klS1+GsSlYf81RLsXIF1sKxxFNbOkR4bPPrNCDhR4f9fn/YRQyP1SXuu+T2e665WINfBad8VzVuxmVP9OEQ+YxJPZE4z/s+L2JSIcaYv9uzqmjq+TnM8L8Bpwz1dsS6TfcH36eXvD+3ps0LMg1aa/C7U9Gb9nzui0r50V4UnV2BI/H5m+m/hVM2NHYtm0oyf4hzY07DSDEXfA4xaiOOg1Ckq6I9FycEZjgF9p2cv8a/gVOpG5hGGaNITEWbTwMWzwIKFOFirIhVz1eDATvVMef/GI55DujjRTEdt8XE38cRrIMcSW5SGo054MtUPn/lJVzoErQnkdLmnMp3FrwbVNCiLTDjPSx+q56+9wJO/QLezXdMGzO+0H/xXczSNmcMHUH7UXwMpxIcrdSgvkGvDPdMsJgawvwY7Ebkh3CKwWEbrtKmeqb4WzwuzKgGCNNimf4MTgWwDRNFT98ni6ciqnaSNHlGfwb3Yc2NL8/xh8b+OTwyF4mBni5Z7glcxJ7X+T68iTBkTuUehQunCvsl2Gah+S+i6nbxdUPaC2UufMy8bMl2y3CKwNeEyAmHB45B0GE0XzTwkwq+5VhBxoHbQYoR1R3cIBip2w3RuidYo8XkeQFbCxed51Ui7cFSPLaJEooUt4GXjAhFd3U8xXiyfxsFI9kLI9HO/o0x6913TmWHFRhxevSdRTgdYNEVauxS/YCjn3B326t9ZAFugjNcTra6BPAiTnMJCx88Wn0RLs+eNwgS419w9AMeJvUMl63TYqByrqVihl8j+zV0WZEZbXPG8OC6i3CeeDWTbuI3OOOc/Qa/7nHo4Cpw8HyeKaSzGX5xOlVuqfGViAoeefC5JTgdQq+RQ/8LnsGmoe/u4QXXM5yWDn7c5/NGqqIOfp7Xfh6PGqmWXG4Jbn0ol+SEv+Hf8gDn421P99eshHfBu6+Hmy+aarlKrEXWwC82JV3JKvhg74J9U4jl0v3wBc+GL/+WLZWllzzU4xczv4dnVm7w3T1cpNanwSK2+LoKKr9nXn7lVNViBfAHd1+0eZVBvE4F/4aHo9Zj7uD095kr64bdxcE64mLNwV3cmdu6y0ay0CvVGjgaay+QuGW/4LATF7O3C1Y5X7rBbQ3wDHKefrUmqGf4xQXBnNHpVAjq8s8auIJlhORaUfSYZHqTzUE0w6OjXQZmrR1qbD/RwSki3GPIDgEjydxGxiq49bhcDmf1CLcVys4vordlt99Tl0qPNp4g1hw8Zs5XrIdT1AoOJn/cdy6nV0DUoLDVdRlOMNV2aqmLNI3tgudS2axG9m7mt+zTCqTMIE9LOeZJYeHgOkbxDrIjP2VhaB2Vx3BR4hI8v4RKS3UShtk01GFYW23DsIISAreKfQhitUvchSSArZ3+6+CIgdqpRJ2tC/f1XFGBRu678u3Ktvucv1BXweG3+0LPYCfHduBDZGE38Wwno0JbW3SHHgvhR4dwSdooMhB60cKPz+AYYj0bpIY92Aeon0JVnosIvPH4EOOv4EjYfDkp1BerTruLaK7NSUqY93F5tZ7v28UU2hQvSTOsP6v8NjSOW60Q2Dt4csp6cWLhI4RVRxnujf589hisffL9S22z7JO3X53V6K6xpfzAkGkn9kGvBRZcFW3s+/bgkRH/qYIvT6kqhcnXJ8Vw3hZaruLD2V2mfTPJaDS22uDnZ60353OO7Tk3idGOTr2JJ/5SAUoptwdkq+iuskXg5Qn5fWdCjnaQ2gwiQmnR9qTSWNiO213nz3UosBBomGJzPk3KR2kAbyVX+fKs9b4nQ9XY2wRe5lr6viZFbkxOBj3aFZ77j1CEdXXqm3NeTDxiPHVdoSORb063a7pRVDLSuU1UcxL7nR/x4Qo7yrMTYz/6c1+kmkX+Ya9z1w4KjfbfnjBX9uGw8uPObRXDrr8OYr/fRb5/O7D5fhQd9rtxKsy8i0xMdVgTnOs7kFzgyhznvWoWll1rO3BXkLjIz02Q3NqhSVCAU6w7Vn/Se6VYynGKm7IOvUfJwiToyYBWNz8/7zpDFEPU6+kCftd0XXA8Bl3T9sX1Uo2Syc/6zv+o3+76fkJKZ28o8tJ1BD8f5//6n4YNvsE3+Abf4Bt8g2/wDb7BN/gG3+AbfINv8P85HP8xEQSRPyf53zp+dE/sSJ9rAAAAAElFTkSuQmCC' />
            <div className={styles.login}>
                {props.auth.isAuth ? 
                <div>
                   {props.auth.userLogin} 
                   <button onClick={props.logoutMe}>logout</button>
                </div>:
                <NavLink to='/login'>login</NavLink>
                }
            </div>
        </header>
    )
}
export default Header