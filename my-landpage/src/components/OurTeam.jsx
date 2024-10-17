import React from "react";
import styled from "@emotion/styled";

export default function Button({theTextInside, href}) {

    .steam{
        background-image: linear-gradient(rgba(30,30,30,0.5),rgba(30,30,30,0.7)), url('../img/BgTeam.jpg');
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        height: 100vh;
    }
    .team{
        overflow: hidden;
        max-width: 890px;
        margin: auto;
    }
    .team .sliders{
        width: 400vw;
        height: 100%;
        transition: 2s;
    }
    .team .slide{
        width: 280px;
        height: 340px;
        display: inline-block;  
        margin-right: 2rem;
    }
    .team .slide-area{
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        color: #fff;
        background-color: rgba(30,30,30,0.7);
        border: 1px groove var(--primary);
    }
    .team .sliders-pointer{
        margin-top: 5rem;
        height: 1.5rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .team .pointer{
        width: 1.5rem;
        height: 1.5rem;
        border: 2px solid var(--primary);
        border-radius: 8px;
        margin: 0 4px;
        cursor: pointer;
    }
    .team .pointer.active{
        background-color: var(--primary);
    }
    .team-img{
        width: 180px;
        height: 180px;
        border: 1px groove rgba(30,30,30,1);
        border-radius: 50%;
        object-fit: cover;
    }
    .team-name{
        text-transform: capitalize;
        font-weight: 600;
        font-size: 1.7rem;
        margin-top: 1.5rem;
        color: var(--primary);
    }
    .team-role{
        font-size: 1.4rem;
        margin-top: 15px;
        color: #ccc;
    }
    .team-links .fab,.team-links .fas{
        color: var(--primary);
        text-decoration: none;
        font-size: 1.7rem;
        margin: 20px 10px;
        background-color: transparent;
    }
    .team-links .fab:hover,.team-links .fas:hover{
        transform: scale(1.3);
    }
    
    `
    return (
        <section class="default dark steam">
            <div class="section-title">Our Team</div>
            <div class="section-desc">Our Co-workers</div>
            <div class="section-body">
                <div class="team">
                    <div class="sliders">
                        <div class="slide">
                            <div class="slide-area">
                               <img src="media/Team-1.jpg" class="team-img"/>
                               <h3 class="team-name">Lucas C. Bresolino</h3>
                               <p class="team-role">Web and Mobile Fullstack </p>
                               <div class="team-links">
                                   <a href=""><i class="fab fa-linkedin-in"></i></a>
                                   <a href=""><i class="fab fa-instagram"></i></a>
                                   <a href=""><i class="fab fa-discord"></i></a>
                                   <a href="mailto:lucascaladob@gmail.com"><i class="fas fa-envelope"></i></a>
                               </div>
                            </div>
                        </div>
                        <div class="slide">
                            <div class="slide-area">
                                <img src="media/Team-2.jpg" class="team-img"/>
                                <h3 class="team-name">Lucas C. Bresolino</h3>
                                <p class="team-role">Data Engineering</p>
                                <div class="team-links">
                                    <a href=""><i class="fab fa-linkedin-in"></i></a>
                                    <a href=""><i class="fab fa-instagram"></i></a>
                                    <a href=""><i class="fab fa-discord"></i></a>
                                    <a href="mailto:lucascaladob@gmail.com"><i class="fas fa-envelope"></i></a>
                                </div>
                            </div>
                        </div>
                        <div class="slide">
                            <div class="slide-area">
                                <img src="media/Team-3.jpg" class="team-img"/>
                                <h3 class="team-name">Lucas C. Bresolino</h3>
                                <p class="team-role">Cloud Master</p>
                                <div class="team-links">
                                    <a href=""><i class="fab fa-linkedin-in"></i></a>
                                    <a href=""><i class="fab fa-instagram"></i></a>
                                    <a href=""><i class="fab fa-discord"></i></a>
                                    <a href="mailto:lucascaladob@gmail.com"><i class="fas fa-envelope"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="sliders-pointer">
                        <div class="pointer" onclick="clickBanner(1)"></div>
                        <div class="pointer" onclick="clickBanner(2)"></div>
                        <div class="pointer" onclick="clickBanner(3)"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}