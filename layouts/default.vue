<template>
  <div>
    <header>
      default layout header
      <ul>
        <li><NuxtLink to="/">index</NuxtLink></li>
        <li><NuxtLink to="/about">about</NuxtLink></li>
        <li><NuxtLink to="/post/1">post</NuxtLink></li>
        <li><NuxtLink to="/post/AAA">post middleware test</NuxtLink></li>
        <li><NuxtLink to="/post/11">post middleware test</NuxtLink></li>
      </ul>
    </header>
    <NuxtPage/>
    <footer>
      default layout footer
    </footer>
  </div>
</template>