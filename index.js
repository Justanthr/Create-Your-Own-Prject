let firstAnswer  = window.prompt('Do you head left or right?')
if(firstAnswer === 'left'){
    let secondAnswer = window.prompt(`You come across a stray cat. 
It scampers off down a small hole, just large enough for you to crawl through. 
Do you follow it, or continue on your path?`)
    if(secondAnswer === 'follow'){
        let thirdAnswer = window.prompt(`You follow the cat to a colony of cats, nestled in a fort of warm blankets and subsisting off of inexplicably warm soup. They are content with you staying, but you wonder if you should alert the world to this magical safe haven.`)
    if(thirdAnswer === 'stay'){
        let fourthAnswer = window.prompt(`You live happily amongst the cats for the rest of your days. One day, when returning from a walk, you see the sorcerer petting the cats. When they see you, they run. Do you chase after the sorcerer again, or do you stay with your cat friends?`)
        if(fourthAnswer === 'chase'){
            let fifthAnswer = window.prompt('You manage to catch the sorcerer, finally, after all of these years, you can talk to this sorcerer. do you ask why they ran, or do you get angry about them messing with the cats and yell at the sorcerer?')
        if(fifthAnswer === 'ask why'){
            let sixthAnswer = window.prompt('The sorcerer turns to face you. they are..... YOU!? Startled, you let go of their arm. They start running again. Do you continue your chase, or do you go back to the cats?')
            if(sixthAnswer === 'continue'){
                let seventhAnswer = window.prompt('While running you trip, and hit your head really hard. when you awake, you see the sorcerer looking down at you. They explain that they are actually your long lost twin. They kept running because when you are both in the same place at the same time, you both eminate a power that the dragon can sense. Do you ask about the dragon, or leave?')
                if(seventhAnswer === 'ask about the dragon'){
                    let eighthAnswer = window.prompt('You start to question your new found twin, when the ground starts shaking. Suddenly, the dragon emerges. Do you grab your twin and run, or stay to fight?')
                    if(eighthAnswer === 'run'){
                        let ninthAnswer = window.prompt(`You grab the sorcerer by the arm and run, but it's no use. The dragon catches up easily. Suddenly it speaks. It says it does not want to harm you. Do you believe it and stop, or do you continue to run?`)
                        if (ninthAnswer === 'stop'){
                            let tenthAnswer = window.prompt(`The dragon lands. You, the sorcerer, and the dragon have a lovely conversation, and all become life long friends. The dragon even gives you a lift back to your cats. Your twin promises to visit.`)
                        }
                    }
                }
            }
        } else if(fifthAnswer === 'yell'){
            let sixthAnswer = window.prompt(`You begin to yell, the sorcerer turns to face you. You're in shock, they're......... YOU!? In your shock, you let go of them, they begin running again. Do you continue chasing them, or do you go home?`)
            if(sixthAnswer === 'continue'){
                let seventhAnswer = window.prompt(`As you're running, you see one of your cats out of the corner of your eye, the cat is running from a dragon! Do you stop chaising the sourser and help the cat, or keep after the sorcerer because they may be able to help?`)
                if(seventhAnswer === 'help the cat'){
                    let eighthAnswer = window.prompt(`You change your direction to help your cat. When you reach the cat the dragon speaks. It says it does not wish to harm you. Do you believe it, or do you try to fight?`)
                    if(eighthAnswer === 'believe it'){
                        let ninthAnswer = window.prompt(`You and the dragon have a lovely conversation, and all become life long friends. The dragon even gives you a lift back to your cats.`)
                    } else if(eighthAnswer === 'fight'){
                        let ninthAnswer = window.prompt(`You grab a sharp rock from the ground and throw it at the dragon. The rock hits the dragon in the left wing, it falls from the sky. The dragon then gets up and runs from you. Now scared of you. You've won..... You hope.`)
                    }
                } else if(seventhAnswer === 'continue'){
                    let eighthAnswer = window.prompt(`You catch up to the sorcerer, when you turn around, and see that the cat and the dragon have been heading straight for you! the dragon says it does not with to harm you. Do you believe them, or fight?`)
                        if(eighthAnswer === 'believe it'){
                            let ninthAnswer = window.prompt(`You and the dragon have a lovely conversation, and all become life long friends. The dragon even gives you a lift back to your cats.`)
                        }else if(eighthAnswer === 'fight'){
                            let ninthAnswer = window.prompt(`You grab a sharp rock from the ground and throw it at the dragon. The rock hits the dragon in the left wing, it falls from the sky. The dragon then gets up and runs from you. Now scared of you. You've won..... You hope.`)
                        }
                }

            }else if(sixthAnswer === 'go home'){
                let seventhAnswer = window.prompt(`you start to head home, when you see one of your cats being chased by a dragon! Do you go get the rest of the cats, or do you try to save the cat by yourself?`)
                if(seventhAnswer === 'save the cat'){
                    let eighthAnswer = window.prompt(`You catch up to the cat and scoop them up. The dragon begins to speak. It says it doesn't want to harm you. Do you believe it or do you fight?`)
                    if(eighthAnswer === 'believe it'){
                        let ninthAnswer = window.prompt(`You and the dragon have a lovely conversation, and all become life long friends. The dragon even gives you a lift back to your cats.`)
                    }
                }else if(seventhAnswer === 'get the colony'){
                    let eighthAnswer = window.prompt(`As you start to head to the colony, you look behind you to see the cat, and the dragon now following you. The dragon begins to speak. It tells you that it does not want to harm you. Do you believe it, or fight?`)
                    if(eighthAnswer === 'believe it'){
                        let ninthAnswer = window.prompt(`You and the dragon have a lovely conversation, and all become life long friends. The dragon even gives you a lift back to your cats.`)
                    } else if(eighthAnswer === 'fight it'){
                        let ninthAnswer = window.prompt(`You grab a sharp rock from the ground and throw it at the dragon. The rock hits the dragon in the left wing, it falls from the sky. The dragon then gets up and runs from you. Now scared of you. You've won..... You hope.`)
                    }
                }
            }
        } 

        } else if(fourthAnswer === 'stay'){
            let fifthAnswer = window.prompt(`You choose to stay with your cat friends, who all suddenly start following the sourcerer. Do you follow the cats, or continue to stay put?`)
            if(fifthAnswer === 'follow'){
                let sixthAnswer = window.prompt(`The cats lead you to the sorcerers house. Do you knock, or just walk in?`)
                if(sixthAnswer === 'knock'){
                    let seventhAnswer = window.prompt(`The sorcerer calls out to you to come in. When you walk in, you both stand there in shock. They're....... YOU!? Do you stay and figure our whats going on, or do you run?`)
                    if(seventhAnswer === 'stay'){
                        let eighthAnswer = window.prompt(`The sorcerer explains, that they are actually your long lost twin. But you must leave, because when you two are together your power is strong enough for the dragon to find you both. Suddenly the ground starts shaking. do you run, or remain seated?`)
                        if(eighthAnswer === 'run'){
                            let ninthAnswer = window.prompt(`You get up to run, but its too late. The dragon is already at the door. It peeks in, but it says that it's peaceful, and not to be scared. Do you believe it, or do you throw something at it and try to run?`)
                            if(ninthAnswer === 'believe it'){
                                let tenthAnswer = window.prompt(`You, the sorcerer, and the dragon have a lovely conversation, and all become life long friends. The dragon even gives you a lift back to your cats. Your twin promises to visit.`)
                            }
                        }
                    }
                }
            } else if(fifthAnswer === 'stay put'){
                let sixthAnswer = window.prompt(`suddenly, the ground starts shaking, a mighty dragon appears. Do you run, or fight?`)
                if(sixthAnswer === 'run'){
                    let seventhAnswer = window.prompt(`You catch up with your cats, when you relize the've come across a little house. Do you go in, or continue to run?`)
                    if(seventhAnswer === 'go in'){
                        let eighthAnswer = window.prompt(`When you enter, you see the sorcerer. You both stand there stunned. Are they.... You?? Do you ask what is going on, or do you leave?`)
                        if(eighthAnswer === 'ask'){
                            let ninthAnswer = window.prompt(`They tell you that they are your long lost twin. Do you believe them, or do you try to fight them?`)
                            if(ninthAnswer === "believe them"){
                                let tenthAnswer = window.prompt(`You sit down, and chat with your life long twin. After hours of catching up, the dragon has left, and you return to your colony.`)
                            } else if(ninthAnswer === 'fight'){
                                let tenthAnswer = window.prompt(`You grab a staff that is sitting next to the door, and charge at the sorcerer. The sorcerer does not hesitate to cast a spell, you then become a mere cat. You return to your cat colony, where they still accept you.`)
                            }
                        } else if(eighthAnswer === 'leave'){
                            let ninthAnswer = window.prompt(`You continue to run, but it is no use. The dragon picks you up. It tells you that you and the sorcerer are twins, and that it is sworn to protect you. Do you believe it, or try and fight?`)
                            if(ninthAnswer === 'believe it'){
                                let tenthAnswer = window.prompt('You and the dragon have a lovely talk. It takes you back to your colony, and promises to visit.')
                            } else if(ninthAnswer === 'fight'){
                                let tenthAnswer = window.prompt(`You struggle to get out of the dragons claws, when you finally do free yourself, you realize you're still in the air. You fall to your death.`)
                            }
                        }
                    } else if(seventhAnswer === 'continue'){
                        let eighthAnswer = window.prompt(`You continue to run, but it is no use. The dragon picks you up. It tells you that you and the sorcerer are twins, and that it is sworn to protect you. Do you believe it, or try and fight?`)
                        if(eighthAnswer === 'believe it'){
                            let ninthAnswer = window.prompt('You and the dragon have a lovely talk. It takes you back to your colony, and promises to visit.')
                        }  else if(eighthAnswer === 'fight'){
                            let ninthAnswer = window.prompt(`You struggle to get out of the dragons claws, when you finally do free yourself, you realize you're still in the air. You fall to your death.`)
                        }
                    }
                } else if(sixthAnswer === 'fight'){
                    let seventhAnswer = window.prompt(`You grab a sharp rock from the ground and throw it at the dragon. The rock hits the dragon in the left wing, it falls from the sky. The dragon then gets up and runs from you. Now scared of you. You've won..... You hope.`)
                }
            }
        } 


    } else if(thirdAnswer === 'spread the word'){
        let fourthAnswer = window.prompt(`After leaving the cat colony, you are never able to find it again; without proof, no one believes your story, which passes into legend nonetheless.`)
    }
    
    } else if(secondAnswer === 'continue'){
        let thirdAnswer = window.prompt(`You come across a chamber that reaches upward to a shining light above. There is a long, winding staircase, and a much quicker, but rickety-looking ladder that leads up toward the light. Which do you take?`)
        if(thirdAnswer === 'ladder'){
            let fourthAnswer = window.prompt(`After ascending a few feet up the ladder, one of its rungs snaps, and you comedically fall through each of the rungs below. Sheepish, you return home.`)
        } else if(thirdAnswer === 'staircase'){
            let fourthAnswer = window.prompt(`After ascending the staircase, you discover a shiny blue stone, which you take home and cherish forever.`)
        }
    } 


} else if(firstAnswer === 'right') {
    let secondAnswer = window.prompt(`You come across a snoring dragon. 
On the other side of him, you see a shiny chest of treasure. Another path would 
lead you away from the dragon altogether. Which path do you take?`)
if(secondAnswer === 'treasure'){
    let thirdAnswer = window.prompt(`The dragon wakes up and sits upright. You only have a moment to respond, to stay or run:`)
    if(thirdAnswer === 'stay'){
        let fourthAnswer = window.prompt(`You and the dragon have an uplifting conversation about local politics and become lifelong friends.`)
    } else if(thirdAnswer === 'run'){
        let fourthAnswer = window.prompt(`Quickly, you run back to the cave's entrance. Sheepish, you return home. On your way, you see a cat. Do you choose to follow it, or go home?`)
        if(fourthAnswer === 'follow'){
            let fifthAnswer = window.prompt(`You follow the cat to a colony of cats, nestled in a fort of warm blankets and subsisting off of inexplicably warm soup. They are content with you staying, but you wonder if you should alert the world to this magical safe haven.`)
            if(fifthAnswer === 'stay'){
                let sixthAnswer = window.prompt(`You live happily amongst the cats for the rest of your days. When one day, you see the sorcerer again.`)
            } else if(fifthAnswer === 'spread the word'){
                let sixthAnswer = window.prompt(`After leaving the cat colony, you are never able to find it again; without proof, no one believes your story, which passes into legend nonetheless.`)
            }
        } else if(fourthAnswer === 'go home'){
            let fifthAnswer = (`On your way, you find a stone shaped like a cat head. You keep it, and treasure it, reminiscing over your adventure.`)
        }
    }

} else if(secondAnswer === 'away'){
    let thirdAnswer = window.prompt(`After walking a while longer, you come across a shiny blue flower. It is so beautiful that you decide you must either draw it or pick it. Which do you do?`)
    if(thirdAnswer === 'draw'){
        let fourthAnswer = window.prompt(`You draw the flower, capturing only a fraction of its beauty with your quill. You bring the drawing home, somewhat disappointed, but over time, discover joy in sharing it with your friends and family, recounting the story of your days as a sorcerer with the aid of the sketch.`)
    } else if(thirdAnswer === 'pick'){
        let fourthAnswer = window.prompt(`You pick the flower and bring it home, and all marvel at its brilliance. However, over time it fades and eventually crumbles to dust.`)
    }
}

}