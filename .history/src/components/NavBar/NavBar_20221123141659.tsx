import React from 'react'

export const NavBar = () => {
    return ( 
        <nav class="navbar">
     <!-- LOGO -->
     <div class="logo">MUO</div>
     <!-- NAVIGATION MENU -->
     <ul class="nav-links">
       <!-- USING CHECKBOX HACK -->
       <input type="checkbox" id="checkbox_toggle" />
       <label for="checkbox_toggle" class="hamburger">&#9776;</label>
       <!-- NAVIGATION MENUS -->
       <div class="menu">
         <li><a href="/">Home</a></li>
         <li><a href="/">About</a></li>
         <li class="services">
           <a href="/">Services</a>
           <!-- DROPDOWN MENU -->
           <ul class="dropdown">
             <li><a href="/">Dropdown 1 </a></li>
             <li><a href="/">Dropdown 2</a></li>
             <li><a href="/">Dropdown 2</a></li>
             <li><a href="/">Dropdown 3</a></li>
             <li><a href="/">Dropdown 4</a></li>
           </ul>
         </li>
         <li><a href="/">Pricing</a></li>
         <li><a href="/">Contact</a></li>
       </div>
     </ul>
   </nav>
     );
}
 




