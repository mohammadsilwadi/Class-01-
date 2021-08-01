import React, { Component } from 'react'

export class Main extends Component {
    render() {
        return (
            <>
            
                <h1> 
Giant horned beast
</h1>
                <h2>Description. </h2>
                <p>The giant horned beast is a big monstrosity who uses his claws and big horns on his head to attack. He has a lot of fur which keeps him warm in cold environments.
                He will attack aggressively as soon as the player enters the arena </p>
                <img src={require('./img1.jpg')} alt="giant horned img"/>

                <h1> mythical horned beasts </h1>
                <h2>Description. </h2>
                <p>Unicorns, a horse or goat-like animal with a single horn, are a commonly depicted mythical creature </p>
                <img src={require('./img2.jpg')}alt="giant horned img" />        </>
        )
    }
}

export default Main