import axiosWithAuth from '../utils/axiosWithAuth';
import React, { useState, useEffect } from 'react';


export default function DeleteClass() {
    useEffect(() => {
        axiosWithAuth.get('https://api-anywhere-fitness.herokuapp.com/api/classes')
        .then(console.log(res))})
}