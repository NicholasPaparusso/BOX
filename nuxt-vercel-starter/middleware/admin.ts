export default defineNuxtRouteMiddleware((to, from) => {
    const { status, data } = useAuth()

    if (status.value !== 'authenticated') {
        return navigateTo('/login')
    }

    // @ts-ignore
    if (data.value?.user?.role !== 'ADMIN') {
        return navigateTo('/')
    }
})
