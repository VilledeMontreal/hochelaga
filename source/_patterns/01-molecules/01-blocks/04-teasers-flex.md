---
title: Cards, flex
---

Flexbox implementation for all teasers. 

* A teaser can be defined as a repeatable hyperlinked responsive block with a lateral layout, collapsing to a vertical layout on smaller screens.
* The teaser will contain a title, a content and a footer default area. The footer will always stick to the bottom.
* It will contain an extra inner container when featuring an image. 
* The image will alway collapse to the top of the block;
* The teaser may contain an arrow-link on any element.

Teaser
    Teaser body
        Icon or image
        Title
        Content
        Footer

Icon [Optional] [First and/or last] [Implemented with ::before, ::after]
Image [Optional] [Left, top or right] [Responsive sizing and position change]
Title [Required] [Inside card body] [Heading tag or any]
Content [Optional][any tag][May have multiple children]
Footer [Optional][any tag]

- - - - - - - - - - - - - - - - - - - - - - - - 

Classes

vdm-teasers +   
    vdm-teaser-type
    color-scheme
    alignement

- - - - - - - - - - - - - - - - 

@see references used : 

- - - - - - - - - - - - - - - - - -
Teasers
- - - - - - - - -

Side-by-side teaser block, big link : 
https://projects.invisionapp.com/d/main#/console/11533069/246771810/preview

Search result teasers
Search field
https://projects.invisionapp.com/d/main#/console/11533069/246949643/preview
https://projects.invisionapp.com/d/main#/console/11533069/245898997/preview

DCI teasers : account tasks
https://projects.invisionapp.com/d/main#/console/11533069/247235329/preview

DCI news teasers
https://projects.invisionapp.com/d/main#/console/11533069/247235323/preview

Image right teaser, bottom arrow 
Compact teaser, stacked
https://projects.invisionapp.com/d/main#/console/11533069/248716747/preview

Image left Teaser, rounded
https://projects.invisionapp.com/d/main#/console/11533069/244609142/preview

Image right teaser, inline arrow
https://projects.invisionapp.com/d/main#/console/11533069/248691983/preview

Complex teaser, no image, no icon
https://projects.invisionapp.com/d/main#/console/11533069/244591333/preview

News teaser, image right, w/ & w/out image
https://projects.invisionapp.com/d/main#/console/11533069/250876590/preview

Document teaser, icon right, looks like search results
https://projects.invisionapp.com/d/main#/console/11533069/247024121/preview


- - - - - - - - - - - - - - - - 
- 
Helpful documentation

@see https://codepen.io/team/css-tricks/pen/EKEYob
@see https://css-tricks.com/snippets/css/a-guide-to-flexbox/
@see https://demo.agektmr.com/flexbox/