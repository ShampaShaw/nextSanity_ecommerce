//import { visionTool } from '@sanity/vision';
import { deskTool } from 'sanity/desk';
import {defineConfig} from "sanity";
import product from './sanity/schemas/project-banner';
import banner from './sanity/schemas/project-product';





const config = defineConfig({

    projectId: "v54u8ryq",

    dataset: "production",

    title: "My personal Website",

    apiVersion: "2023-05-14",

    basePath: "/admin",
    
    plugins: [deskTool()],

    schema: { types: [product,banner] }

})


export default config