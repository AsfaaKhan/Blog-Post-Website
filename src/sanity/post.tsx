import { defineType,defineField,defineArrayMember } from "sanity"


export const post = defineType( {
    name: "post",
    type: "document",
    title: "Post",
    fields: [
        defineField({
            name: "title",
            type: "string",
            title: "Post Title",
            description: "Title of the post",
            validation:Rule => Rule.required()
        }),
        // Slug Fields
        defineField({
            name : 'slug',
            type: 'slug',
            title: "Slug",
            options:{
                source : "title",
                maxLength : 96
            },
            validation : Rule=> Rule.required()
        }),
        defineField ({
            name : 'summary',
            type: 'text',
            title : 'Summary',
            validation : Rule => Rule.required()
        }),
        defineField ({
            title: 'Image',
            name : 'image',
            type: 'image',
            options:{
                hotspot : true
            }
        }),
        defineField({
            name : "content",
            type : 'array',
            title : 'Content',
            of :[
                defineArrayMember({
                    type : "block"
                })
            ]
        }),
        defineField({
            name: "author",
            type :"reference",
            title : "Author",
            to:[{
                type : "author"
            }]
        }),
        
    ]
})