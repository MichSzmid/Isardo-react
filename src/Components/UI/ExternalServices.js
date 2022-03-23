import React from 'react'

const ExternalServices = () => {
    return (
        <div style={{display:"inline",position:"relative"}}>
        {ServicesList.map(({name, adress, iconDir}) => (
        <div key={name} className={"external-account"}><a href={adress}><img src={iconDir}/></a></div>
        ))}
        </div>
    )
}
const ServicesList = [
    {
    name: "google",
    adress: "https://www.google.com",
    iconDir: require("../../images/icons/external1google.png")
    },
    {
    name: "facebook",
    adress: "https://www.facebook.com",
    iconDir: require("../../images/icons/external2facebook.png")
    },   
    {
    name: "icloud",
    adress: "https://www.icloud.com",
    iconDir: require("../../images/icons/external3icloud.png")
    },
]

export default ExternalServices
