import React,{Component} from "react";
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

export default class CvPdf extends Component{
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div>
                <h1>Your CV is ready!</h1>
                <button>Get PDF file</button>
            </div>
        )
    }
}