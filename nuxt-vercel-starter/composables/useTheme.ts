export const useTheme = () => {
    const isDark = useState<boolean>('theme', () => true)

    onMounted(() => {
        // Check local storage or system preference
        const storedTheme = localStorage.getItem('color-mode')
        if (storedTheme) {
            isDark.value = storedTheme === 'dark'
        } else {
            isDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches
        }
        updateDOM()
    })

    const toggleTheme = () => {
        isDark.value = !isDark.value
        localStorage.setItem('color-mode', isDark.value ? 'dark' : 'light')
        updateDOM()
    }

    const updateDOM = () => {
        if (isDark.value) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }

    return { isDark, toggleTheme }
}
