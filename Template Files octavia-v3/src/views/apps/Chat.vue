<script setup>
import { ref } from "vue";
const isToggle = ref(false);
const isRightToggle = ref(false);
const sidebarBoxToggle = () => {
  isToggle.value = !isToggle.value;
  isRightToggle.value = false;
};
const rightbarBoxToggle = () => {
  isRightToggle.value = !isRightToggle.value;
  isToggle.value = false;
};

const overlayClose = () => {
  isToggle.value = false;
  isRightToggle.value = false;
};
</script>
<template>
  <v-container>
    <div class="d-flex justify-space-between mb-7">
      <v-btn
        icon
        flat
        class="bg-primary-lighten-5 chat-btn"
        @click="sidebarBoxToggle"
      >
        <i class="tio- text-primary text-18">menu_hamburger</i>
      </v-btn>
      <v-btn
        icon
        flat
        class="bg-primary-lighten-5 chat-btn"
        @click="rightbarBoxToggle"
      >
        <i class="tio- text-primary text-18">filter_list</i>
      </v-btn>
    </div>
    <div class="chat-box-wrapper">
      <div :class="isToggle ? 'open' : ''" class="chat-box-sidebar">
        <div class="d-flex justify-space-between p-card">
          <div class="d-flex align-center">
            <v-badge
              bordered
              location="bottom-right"
              color="primary"
              dot
              offset-x="2"
              offset-y="4"
              class="me-2"
            >
              <v-avatar size="large">
                <v-img src="@/assets/images/faces/2.jpg"></v-img>
              </v-avatar>
            </v-badge>
            <div>
              <div class="text-subtitle-2 f-600 truncate">
                Jamie Alexander Jamie Alexander
              </div>
              <div class="text-caption">UI/UX Designer</div>
            </div>
          </div>
          <v-btn icon flat>
            <i class="text-secondary text-18 tio-">more_horizontal</i>
          </v-btn>
        </div>
        <v-divider class="line-color"></v-divider>
        <div class="p-card">
          <v-text-field
            variant="outlined"
            color="primary"
            label="search"
            class="mb-2"
            hide-details=""
          ></v-text-field>
          <div class="text-subtitle-2 f-600 truncate mb-6">Recent Chats</div>
          <div
            v-for="(item, index) in 5"
            :key="index"
            class="d-flex justify-space-between mb-6"
          >
            <div class="d-flex align-center">
              <v-badge
                bordered
                location="bottom-right"
                color="primary"
                dot
                offset-x="2"
                offset-y="4"
                class="me-2"
              >
                <v-avatar size="large">
                  <v-img src="@/assets/images/faces/2.jpg"></v-img>
                </v-avatar>
              </v-badge>
              <div>
                <div class="text-subtitle-2 f-600 truncate">
                  Jamie Alexander Jamie Alexander
                </div>
                <div class="text-caption">UI/UX Designer</div>
              </div>
            </div>
            <div class="d-flex flex-column align-end">
              <div class="text-caption text-secondary">9.44 pm</div>
              <div class="bg-primary px-2 py-1 d-flex rounded-circle text-10">
                4
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="chat-box-main-content">
        <div class="d-flex justify-space-between align-center p-card">
          <div class="d-flex align-center">
            <v-badge
              bordered
              location="bottom-right"
              color="primary"
              dot
              offset-x="2"
              offset-y="4"
              class="me-2"
            >
              <v-avatar size="large">
                <v-img src="@/assets/images/faces/2.jpg"></v-img>
              </v-avatar>
            </v-badge>
            <div>
              <div class="text-subtitle-2 f-600 truncate">
                Jamie Alexander Jamie Alexander
              </div>
              <div class="text-caption">Online now</div>
            </div>
          </div>
        </div>
        <v-divider class="line-color"></v-divider>
        <div class="chat-box-content p-card">
          <div class="d-flex justify-end mb-10">
            <div>
              <div class="bg-primary px-3 py-2 rounded text-white mb-1">
                Hello...
              </div>
              <div class="text-secondary text-caption text-end mt-2">
                Today, 2:12pm
              </div>
            </div>
          </div>
          <div class="d-flex justify-end mb-10">
            <div>
              <div class="bg-primary px-3 py-2 rounded text-white mb-1">
                Hows everything Going ?
              </div>
              <div class="text-secondary text-caption text-end mt-2">
                Today, 2:12pm
              </div>
            </div>
          </div>
          <div class="d-inline-block">
            <div class="d-flex">
              <v-avatar size="46" class="me-2 flex-shrink-0">
                <img src="@/assets/images/faces/2.jpg" alt="" />
              </v-avatar>
              <div>
                <div
                  class="bg-primary-lighten-5 text-subtitle-2 px-3 py-2 rounded text-secondary f-600"
                >
                  Hows everything Going ?
                </div>
                <div
                  class="text-caption text-secondary font-weight-medium mt-2"
                >
                  Today, 2:12pm
                </div>
              </div>
            </div>
          </div>
        </div>
        <v-divider class="line-color"></v-divider>
        <div
          class="chat-box-footer d-flex justify-space-between align-center p-card"
        >
          <div class="d-flex">
            <v-btn flat class="me-1" size="sm"
              ><i class="text-18 tio-">attachment_diagonal</i></v-btn
            >
            <v-btn flat class="me-5" size="sm"
              ><i class="text-18 tio-">image</i></v-btn
            >
          </div>
          <v-text-field
            color="primary"
            hide-details
            placeholder="write something"
          ></v-text-field>
          <v-btn flat>
            <i class="tio- text-primary text-18 rotate-43">send</i>
          </v-btn>
        </div>
      </div>
      <div :class="isRightToggle ? 'open' : ''" class="chat-box-rightbar">
        <div class="p-card text-center">
          <v-badge
            bordered
            location="bottom-right"
            color="primary"
            dot
            offset-x="2"
            offset-y="4"
            class="mb-4"
          >
            <v-avatar size="large">
              <v-img src="@/assets/images/faces/2.jpg"></v-img>
            </v-avatar>
          </v-badge>
          <div class="text-subtitle-2 mx-auto f-600 truncate">
            Jamie Alexander
          </div>
          <div class="text-caption">UI/UX Designer</div>
        </div>
        <v-divider class="line-color"></v-divider>
        <div class="d-flex p-card">
          <div class="flex-1 text-center mb-3">
            <div
              class="bg-primary-lighten-5 text-primary rounded me-3 d-flex flex-column align-center py-2 mb-2"
            >
              <i class="text-20 tio- text-primary">files_outlined </i>
              <div class="text-caption f-600 text-primary">230</div>
            </div>
            <div class="text-caption text-primary f-600 me-3">Files</div>
          </div>
          <div class="flex-1 text-center mb-3">
            <div
              class="bg-primary-lighten-5 text-grey-500 br-8 flex-1 d-flex flex-column align-center py-2 mb-2"
            >
              <i class="text-20 text-secondary tio-">link</i>
              <div class="text-caption text-secondary f-600">230</div>
            </div>
            <div class="text-caption text-secondary f-600">Links</div>
          </div>
        </div>
        <div class="p-card">
          <div class="text-caption f-600 mb-4">File Type</div>
          <div
            v-for="(item, index) in 4"
            :key="index"
            class="d-flex justify-space-between align-start mb-4"
          >
            <div class="d-flex">
              <v-avatar size="30" class="rounded-0 me-2 flex-shrink-0">
                <img class="w-full" src="@/assets/images/file/Css.svg" alt="" />
              </v-avatar>
              <div>
                <div class="body-text-1">ReactJS- Course.pdf</div>
                <div class="body-text-1 text-grey-500">4.5 MB</div>
              </div>
            </div>
            <v-btn icon flat size="sm">
              <i class="text-18 text-secondary tio-">download_outlined </i>
            </v-btn>
          </div>
        </div>
      </div>
      <div
        :class="isToggle || isRightToggle ? 'open' : ''"
        @click="overlayClose"
        class="chat-box-overlay"
      ></div>
    </div>
  </v-container>
</template>

<style lang="scss" scoped>
.rotate-43 {
  transform: rotate(43deg);
}
.truncate {
  max-width: 120px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.chat-btn {
  display: none;
  @media (max-width: 1200px) {
    display: block;
  }
}
.chat-box-wrapper {
  display: flex;
  width: 100%;
  height: calc(80vh);
  position: relative;
  overflow: hidden;
  .chat-box-sidebar {
    width: 300px;
    transition: all 0.2s ease-in;
    overflow-y: auto;
    background-color: #fff;
    border-radius: 4px;
    margin-right: 28px;
    flex-shrink: 0;
    @media (max-width: 1200px) {
      & {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
        position: absolute;
        z-index: 99;
        height: 100%;
        width: 260px;
        left: -300px;
        &.open {
          left: 0;
        }
      }
    }
  }
  .chat-box-main-content {
    width: calc(100% - (300px + 240px + 28px));
    background-color: #fff;
    border-radius: 4px;
    position: relative;
    .chat-box-content {
      height: calc(80vh - 145px);
      overflow-y: auto;
    }
    .chat-box-footer {
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 60px;
    }
    @media (max-width: 1200px) {
      width: 100%;
      position: absolute;
      margin-left: 0;
      height: 100%;
    }
  }
  .chat-box-rightbar {
    flex-shrink: 0;
    width: 240px;
    transition: all 0.2s ease-in;
    overflow-y: auto;
    margin-left: 28px;
    background-color: #fff;
    border-radius: 4px;
    @media (max-width: 1200px) {
      position: absolute;
      right: -240px;
      height: 100%;
      z-index: 5;
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
      &.open {
        right: 0;
      }
    }
  }
  .chat-box-overlay {
    position: absolute;
    z-index: 4;
    display: none;
    background-color: #000;
    opacity: 0.5;
    height: 100%;
    top: 0;
    left: 0;
    width: 100%;
    &.open {
      display: block;
    }
  }
}
</style>
