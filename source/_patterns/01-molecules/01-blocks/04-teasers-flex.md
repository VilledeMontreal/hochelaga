---
title: Teasers, flex
---

Flexbox implementation for all teasers. 

* A teaser can be defined as a repeatable hyperlinked responsive block with a lateral layout, collapsing to a vertical layout on smaller screens.
* The teaser will contain a title, a content and a footer default area. The footer will always stick to the bottom.
* It will contain an extra inner container when featuring an image and dual icons with floating identifiers. 
* The teaser bock with an inner container uses a dual axis flex, sometimes flipped for responsive layouts.
* The image will alway collapse to the top of the block;
* The teaser may contain an .arrow-link on any element.

- - - - - - - - - - - - - - - - - - - - - - - - 
## Markup structure

The most complex form fo the markup structure is expressed below. Items with a star are required. Inner .content-wrapper used only for most complex cases. 

.teasers *
    .teaser * 
        a.teaser-body *
            :before, :after = icons
            image
            .content-wrapper [optional]
                .xyz-extra-element
                .title *
                .content
                .footer
            .identifier


- - - - - - - - - - - - - - - - - - - - - - - - 
## Classes

vdm-teasers +   
    vdm-teaser-type
    color-scheme
    alignement
    special-case-xyz
        extra fixture : date, identifier, category


- - - - - - - - - - - - - - - - - - - - - - - - 
## Issues

* Difficult scaling with the images model at various breakpoints when the text gets long.
* Management of the line height & bottom margin is touchy and critical for titles.
* Footer needs to be sticky at all times, or :last-child on any last element?

- - - - - - - - - - - - - - - - - - - - - - - - 
## Tests, questions and todo's

* What is the least amount of usage we can make of the inner wrapper?
* All blocks have to be able to withstand large or very small amounts of text in their various elements
* Markup has to be made optimal and accessible, using the proper tags, aria attributesand the like
* Mesurement have to be made exact, scale is currently totally approximative.
* Vertical spacing has to be reviewd throughout, with a special attention to responsive layout.
* Mixins, variables (units, settings) , generic classes that may be used elsewhere need to be packaged and extracted.
* Make recommandations for maximum character lenghts for soem elements.


More to implement?

* 311 call blocks https://projects.invisionapp.com/d/main#/console/11533069/245897449/preview
* Right column cameo https://projects.invisionapp.com/d/main#/console/11533069/248714900/preview


- - - - - - - - - - - - - - - - 
## References

@see references used : 

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
## Helpful documentation

* @see https://codepen.io/team/css-tricks/pen/EKEYob
* @see https://css-tricks.com/snippets/css/a-guide-to-flexbox/
* @see https://demo.agektmr.com/flexbox/
* @see https://philipwalton.github.io/solved-by-flexbox/demos/vertical-centering/