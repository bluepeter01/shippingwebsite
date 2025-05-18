<header class="bg-yellow-400 w-full top-0 fixed p-2 items-center">
    <nav class="flex justify-between items-center z-200">
        <div class="flex items-center gap-2 text-blue-900">
            <img class="h-15 w-15 rounded-full" src="/Gemini_Generated_Image_l3496wl3496wl349.png" alt="">

            <a href="/"><h1 class="font-bold text-xl flex cursor-pointer italic">SWIFTPORT LOGISTICS</h1></a>

        </div>


    <ul class="hidden md:flex gap-5 quicksand text-blue-900">
        <!-- <li class="cursor-pointer hover:text-blue-900 hover:underline transition-transform duration-300 hover:scale-105">Home</li> -->
        <a href="/track"><li class="cursor-pointer hover:text-blue-900 hover:underline transition-transform duration-300 hover:scale-105">Track</li></a>

       <a href="/ship"><li class="cursor-pointer hover:text-blue-900 hover:underline transition-transform duration-300 hover:scale-105">Ship</li></a> 

        <a href="/about"><li class="cursor-pointer hover:text-blue-900 hover:underline transition-transform duration-300 hover:scale-105">About Us</li></a>

        <a href="/services"><li class="cursor-pointer hover:text-blue-900 hover:underline transition-transform duration-300 hover:scale-105">Services</li></a>

        <a href="/contact"><li class="mr-6 cursor-pointer hover:text-blue-900 hover:underline transition-transform duration-300 hover:scale-105">Contact Us</li></a>
    </ul>

    <div class="md:hidden relative z-200">
        <input id="my-drawer" type="checkbox" class="hidden peer" />
        
        <!-- Hamburger Button -->
        <label for="my-drawer" class="text-white cursor-pointer hover:text-blue-900 transition-transform duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
            <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8h22M5 16h22M5 24h22"/>
          </svg>
        </label>
      
        <!-- Overlay -->
        <label for="my-drawer" class="fixed inset-0 bg-black/50 hidden peer-checked:block z-[998]"></label>
      
        <!-- Drawer Content -->
        <div class="fixed top-0 left-0 h-full w-72 bg-white shadow-lg p-4 z-[999] transform -translate-x-full peer-checked:translate-x-0 transition-transform duration-300">
          <ul class="space-y-1 text-stone-800">
            <li class="hover:bg-gray-300 p-2 rounded-lg"><a href="#">Track</a></li>
            <li class="hover:bg-gray-300 p-2 rounded-lg"><a href="#">Ship</a></li>
            <li class="hover:bg-gray-300 p-2 rounded-lg"><a href="#">About Us</a></li>
            <li class="hover:bg-gray-300 p-2 rounded-lg"><a href="#">Services</a></li>
            <li class="hover:bg-gray-300 p-2 rounded-lg"><a href="#">Contact Us</a></li>
          </ul>
        </div>
      </div>
      

    </nav>

</header>