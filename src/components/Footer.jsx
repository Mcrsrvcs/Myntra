import React from 'react'
import PlayStore from '../google_play.png'
import AppleStore from '../apple_store.png'
import original from '../original.png'
import returnimg from '../return.png'

function Footer() {
  return (
    <div className="flex bg-gray items-center justify-center">
        <div className="flex-row">
        <ul>
            <h4>Online Shoping</h4>
                <li>Men</li>
                <li>Women</li>
                <li>Kids</li>
                <li>Living & Home</li>
                <li>Beauty</li>
        </ul>
        <ul>
            <h4>Useful Links</h4>
                <li>Contect Us</li>
                <li>FAQ</li>
                <li>T&C</li>
                <li>Terms of Use</li>
                <li>Track Orders</li>
        </ul>
        </div>
        <div className="flex-row">
        <ul>
            <h4 className="">EXPERIENCE MYNTRA APP ON MOBILE</h4>
            <ul className="flex-row ">
                <li className="mx-0"><img src={PlayStore} alt="" className="dwdicons "/></li>
                <li className="mx-0"><img src={AppleStore} alt="" className="dwdicons apl"/></li>
            </ul>
        </ul>
        <div className="flex items-center">
            <div>
            <div className="flex my-2 items-center justify-center">
        <div>
    <img src={original} alt="" className="orgimg"/>
</div>
<div className="w-50 mx-2">
100% ORIGINAL guarantee for all products at myntra.com
</div>
</div>
<div className="flex my-2 items-center justify-center">
<div>
    <img src={returnimg} alt="" className="orgimg"/>
</div>
<div className="w-50 mx-2">
Return within 30days of receiving your order
</div>
</div>
</div>
        </div>
        </div>
        </div>
  )
}

export default Footer