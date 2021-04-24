/**
 * Name: Entry.page.js
 * Author: Dave Pettit
 * Date: April 24, 2021
 * Purpose: UI for CRM login
 *  
 */

import React from 'react';

import { Jumbotron } from 'react-bootstrap';
import './entry.style.css';

export const Entry = () =>
{
    return (
        <div className="entry-page bg-info">            
            <Jumbotron>Entry Page</Jumbotron>
        </div>
    )
};