import {load} from './storage.js'
import { popupE } from "@/app/lib/trigger"

export function getData(setData,endpoint,parameters, token=load('token')) {
    popupE('Processing', 'Please wait...')
    //map parameters to get parameter format
    let params = new URLSearchParams(parameters).toString();
    console.log('Payload :: ', params)
    fetch(`${process.env.NEXT_PUBLIC_API_URL}${endpoint}?${params}`, {
    headers: {
        'Authorization': `Bearer ${token}`,
    }
    })
    .then(response => response.json())
    .then(data => {
        console.log(`From ${endpoint}`, data)
        if (data.error) popupE('Error', data.error)
        else setData(data);
        if (data.message) popupE('Success', data.message)
    })
    .catch(err => {
        console.log(err)
        popupE('Error', 'Server Error')
    });
}

export function getFile(name,endpoint,parameters, token=load('token')) {
    let params = new URLSearchParams(parameters).toString();
    fetch(`${process.env.NEXT_PUBLIC_API_URL}${endpoint}?${params}`, {
    headers: {
        'Authorization': `Bearer ${token}`,
    }
    })
    .then(response => response.blob())
    .then(blob => {
        console.log(blob)
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.style.display = 'none';
        a.href = url;
        a.download = name;
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
    })
    .catch(err => {
        console.log(err)
        popupE('Error', 'Server Error')
    });
}

export function postFile(setData,file,title,endpoint,token = load('token')) {
    const formData = new FormData();
    formData.append(`file`, file);
    formData.append('title', title);
    fetch(`${process.env.NEXT_PUBLIC_API_URL}${endpoint}`, {
        method: "POST",
        headers:{
            'Authorization': `Bearer ${token}`,
        },
        body: formData
    })
        .then((res) => res.json())
        .then((data) => {
            if (data.error) popupE('Error', data.error)
            if (data.message) popupE('Success', data.message)
            setData(data);
        })
        .catch(err => {
            console.log(err)
            popupE('Error', 'File upload Error')
        });
}

export function postData(setData,data,endpoint,token = load('token')) {
    popupE('Processing', 'Please wait...')
    fetch(`${process.env.NEXT_PUBLIC_API_URL}${endpoint}`, {
        method: "POST",
        headers:{
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then((res) => res.json())
    .then((data) => {
        console.log(`From ${endpoint}`, data)
        if (data.error) popupE('Error', data.error)
        if (data.message) popupE('Success', data.message)
        setData(data);
    })
    .catch(err => {
        console.log(err)
        popupE('Error', 'Server Error')
    });
}

export function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export function fetcher([endpoint,parameters, token=load('token')]) {
    // if (load('token') == null) throw new Error('Session Expired')
    let params = new URLSearchParams(parameters).toString();
    console.log(`Payload to ${endpoint} :: `, params)
    return fetch(`${process.env.NEXT_PUBLIC_API_URL}${endpoint}?${params}`, {
    headers: {
        'Authorization': `Bearer ${token}`,
    }
    })
    .then(response => response.json())
}