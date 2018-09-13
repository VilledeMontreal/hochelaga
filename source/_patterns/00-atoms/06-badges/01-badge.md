---
title: Badge
---

Badges needs the default <code>.badge</code> class.

Badges are available in default and light <code>.badge-light</code> variants.

Link badge becomes outline, changes to $primary color and behaves like button on hover. Link badge is available in default and light varints.

<h4>Badge Pills</h4>

Badge pills should <strong>only</strong> used with dialog color. <code>.badge-pill-success</code>, <code>.badge-pill-warning</code>, <code>.badge-pill-danger</code> or <code>.badge-pill-info</code> <strong>MUST</strong> be added to <code>.badge</code> and <code>.badge-pill</code> classes.



<h4>Self collapsing</h4>
<p>When there are no new or unread items, badges will simply collapse (via CSS's <code>:empty</code> selector) provided no content exists within.</p>

<div class="" id="callout-badges-ie8-empty">
	<h4>Cross-browser compatibility</h4>
	<p>Badges won't self collapse in Internet Explorer 8 because it lacks support for the <code>:empty</code> selector.</p>
</div>