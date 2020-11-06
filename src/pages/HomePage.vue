<template>
<div>
    <Header />
    <CuentasMenu />
</div>
</template>

<script>
import  Header  from '../components/Header';
import CuentasMenu from '../components/CuentasMenu';
export default {
    name: 'HomePage',
    components: {
        Header,
        CuentasMenu,
    },
}
</script>    