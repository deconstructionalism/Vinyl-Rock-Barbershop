import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Barber extends Component {
    render() {
        return (
            <div>
                <li>
                    <Link to='/BarbersProfile/1'>
                        Shawn
                    </Link>
                    <h4>Avalable Tomorrow</h4>
                    <p>Tomorrow @ 7 a.m</p>
                </li>
                <li>
                    <Link to='/BarbersProfile/2'>
                        Ben
                    </Link>
                    <h4>Avalable Tomorrow</h4>
                    <p>Tomorrow @ 10 a.m</p>
                </li>
                <li>
                    <Link to='/BarbersProfile/3'>
                        Sara               
                    </Link>
                    <h4>Avalable Tomorrow</h4>
                    <p>Tomorrow @ 8 a.m</p>
                </li>
                <li>
                    <Link to='/BarbersProfile/4'>
                        Kelly                        
                    </Link>
                    <h4>Avalable Tomorrow</h4>
                    <p>Tomorrow @ 2 p.m</p>
                </li>
                <li>
                    <Link to='/BarbersProfile/5'>
                        Trevor
                    </Link>
                    <h4>Avalable Tomorrow</h4>
                    <p>Tomorrow @ 2 p.m</p>
                </li>
                <li>
                    <Link to='/BarbersProfile/6'>
                        Cameron
                    </Link>
                    <h4>Unavalable Tomorrow</h4>
                </li>
            </div>
        )
    }
}
