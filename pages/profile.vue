<template>
    <div>
        <main class="container-form">
            <el-form>
                <h2 class="title">Tu cuenta :</h2>
                <el-form-item label="Nombre completo :">
                    <el-input v-model="name" :placeholder="user.name" clearable></el-input>
                </el-form-item>
                <el-form-item label="Email :">
                    <el-input v-model="email" :placeholder="user.email" clearable></el-input>
                </el-form-item>
                <el-form-item label="Contraseña :">
                    <el-input v-model="password" placeholder="Actualiza tu contraseña" clearable></el-input>
                </el-form-item>

                <el-form-item class="flex-end">
                    <div class="el-button-container">
                        <el-button icon="el-icon-delete-solid">Cancelar</el-button>
                        <el-button @click="updateProfile" icon="el-icon-upload">Actualizar</el-button>
                    </div>
                </el-form-item>
            </el-form>
        </main>
    </div>
</template>

<script src="./profile.ts" lang="ts"></script>

<style lang="scss">
    @import '@/assets/index';
</style>