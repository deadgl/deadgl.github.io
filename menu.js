document.addEventListener("DOMContentLoaded", function () {
    const navContainer = document.getElementById("main-nav");
    if (!navContainer) return;

    // Detecta se está na subpasta do xeno-linux para ajustar as rotas relativas
    const isSubfolder = window.location.pathname.includes("/xeno-linux/");
    const rootPath = isSubfolder ? "../" : "./";
    const xenoPath = isSubfolder ? "./" : "./xeno-linux/";

    navContainer.innerHTML = `
        <header class="border-b border-gray-800 bg-gray-950/80 backdrop-blur sticky top-0 z-50">
            <div class="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
                <a href="${rootPath}" class="flex items-center gap-3 hover:opacity-80 transition">
                    <i class="fa-solid fa-terminal text-2xl text-blue-500"></i>
                    <span class="font-bold text-lg tracking-wide text-white">DeadGL Portal</span>
                </a>
                
                <nav class="flex items-center gap-6 text-sm font-medium">
                    <a href="${rootPath}" class="text-gray-300 hover:text-white transition flex items-center gap-2">
                        <i class="fa-solid fa-house text-xs"></i> Home
                    </a>
                    <a href="${xenoPath}" class="text-gray-300 hover:text-blue-400 transition flex items-center gap-2">
                        <i class="fa-brands fa-linux text-xs"></i> Xeno Linux
                    </a>
                    <a href="https://github.com/SEU-USUARIO/XENO-LINUX" target="_blank" rel="noopener" 
                       class="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white text-xs px-3 py-1.5 rounded-lg border border-gray-700 transition">
                        <i class="fa-brands fa-github text-sm"></i> GitHub
                    </a>
                </nav>
            </div>
        </header>
    `;
});
