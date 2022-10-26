import { useState, useRef, useEffect } from 'react'
import '../src/cardswipe.css'

function CardSwipe({name, handleClick, index}) {
    
    const [isHeld, setIsHeld] = useState(false)
    const [mouseX, setMouseX] = useState(0)
    const [swipeAnimate, setSwipeAnimate] = useState(false)
    const [zIndex, setZIndex] = useState(false)
    const [firstTouch, setFirstTouch] = useState(0)
    const [touchMove, setTouchMove] = useState(0)


    // const myRef = useRef()
    
    // useEffect(
    //     () => {
    //         myRef.current.addEventListener('touchmove', move, { passive: false })
    //     }
    // ,[])
    
    
    const up = (e) => {
        setIsHeld(false)
        
        handleClick(e)
        
        setSwipeAnimate(true)
        setZIndex(true)
        
        setTimeout(()=>{
            setSwipeAnimate(false)
        },1200)
        
        setTimeout(()=>{
            setZIndex(false)
        },100)
        
        setMouseX(false)
        
    }
    
    const mobileUp = (e) => {
        setIsHeld(false)
        
        if(mouseX <= 55 && mouseX){
            handleClick(e)
            setSwipeAnimate(true)
            setZIndex(true)
            
            setTimeout(()=>{
                setSwipeAnimate(false)
            },1200)
            
            setTimeout(()=>{
                setZIndex(false)
            },100)

            setTimeout(()=>{
                setMouseX(false)
            },100)

        } else {
            setMouseX(false)
            }
    }
    
    const hold = (e) => {
        setIsHeld(true)
        setFirstTouch(e.currentTarget.offsetLeft - e.touches[0].clientX)
    }

    const move = (e) => {
        // e.preventDefault()
        if (isHeld){
            setMouseX(e.touches[0].clientX + firstTouch)
        }
    }

    const style = {
        backgroundColor: `${name.color}`,
        left: mouseX ? `${mouseX}px` : '50%',
        zIndex: zIndex ? '5' : '',
    }

    return (
        <div 
            // ref={myRef}
            // onMouseMove={move}
            // onMouseDown={hold}
            // onMouseUp={up}
            onTouchMove={move}
            onTouchStart={hold}
            onTouchEnd={mobileUp}
            onClick={up}
            className={"card" + ' ' + `card${index}` + ' ' + `${swipeAnimate ? "swiped" : ''}` }
            style={style}
        >
            <h2>{name.name}</h2>
        </div>
    )

}

export default CardSwipe