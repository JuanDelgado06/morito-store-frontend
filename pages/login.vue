<template>
    <div>
        <main class="container-form">
            <el-form>
                <h2 class="title">Iniciar Sessión</h2>
                <el-form-item label="Email :">
                    <el-input v-model="email" placeholder="Añade un nombre" clearable></el-input>
                </el-form-item>
                <el-form-item label="Password :">
                    <el-input v-model="password" placeholder="Añade un nombre" clearable></el-input>
                </el-form-item>
                <el-form-item class="flex-end">
                    <div class="el-button-container">
                        <el-button icon="el-icon-delete-solid">Limpiar</el-button>
                        <el-button @click="login" icon="el-icon-upload">Enviar</el-button>
                    </div>
                </el-form-item>
            </el-form>
        </main>
    </div>
</template>

<script src="./login.ts" lang="ts"></script>