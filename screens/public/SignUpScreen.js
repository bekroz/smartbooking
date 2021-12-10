import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import { COLORS, SIZES } from '../../constants/theme';
import { SvgXml } from 'react-native-svg';

export default function NoFoundScreen({ navigation }) {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.darkBackground,
      }}>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          top: 120,
        }}>
        <SvgXml
          xml={`<svg width="231" height="221" viewBox="0 0 231 221" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_2:17395)">
        <path d="M194.409 52.3807H193.195V19.2025C193.195 14.1097 191.166 9.22544 187.553 5.62426C183.94 2.02309 179.04 -3.05151e-05 173.931 -3.05151e-05H103.409C100.88 -7.1244e-05 98.3745 0.496577 96.0372 1.46156C93.6999 2.42654 91.5761 3.84095 89.7872 5.62404C87.9983 7.40714 86.5793 9.52399 85.6111 11.8537C84.6429 14.1835 84.1446 16.6805 84.1445 19.2022V201.221C84.1445 206.313 86.1742 211.198 89.787 214.799C93.3998 218.4 98.2998 220.423 103.409 220.423H173.93C179.039 220.423 183.939 218.4 187.552 214.799C191.165 211.198 193.194 206.313 193.194 201.221V75.9976H194.408L194.409 52.3807Z" fill="#3F3D56"/>
        <path d="M189.244 17.9164V202.506C189.243 206.367 187.704 210.071 184.965 212.801C182.226 215.532 178.512 217.067 174.638 217.068H102.67C98.7943 217.069 95.0775 215.535 92.3366 212.804C89.5958 210.073 88.0554 206.369 88.0542 202.506V17.9164C88.0554 14.0537 89.5957 10.3496 92.3364 7.61886C95.0772 4.88811 98.7939 3.3543 102.669 3.3548H111.399C110.971 4.40556 110.807 5.5452 110.924 6.67353C111.041 7.80187 111.434 8.88436 112.068 9.82586C112.703 10.7674 113.56 11.5391 114.564 12.0731C115.568 12.6071 116.688 12.8872 117.826 12.8886H158.856C159.994 12.8872 161.115 12.6071 162.119 12.0731C163.123 11.5391 163.98 10.7674 164.614 9.82586C165.249 8.88436 165.642 7.80187 165.759 6.67353C165.875 5.5452 165.712 4.40556 165.283 3.3548H174.635C178.509 3.35546 182.224 4.88944 184.963 7.61952C187.702 10.3496 189.242 14.0523 189.244 17.9136V17.9164Z" fill="white"/>
        <path d="M138.636 92.0178C155.23 92.0178 168.681 78.6092 168.681 62.0688C168.681 45.5284 155.23 32.1198 138.636 32.1198C122.042 32.1198 108.59 45.5284 108.59 62.0688C108.59 78.6092 122.042 92.0178 138.636 92.0178Z" fill="#5F85DB"/>
        <path d="M171.404 124.242H107.452C107.138 124.242 106.837 124.118 106.615 123.896C106.393 123.675 106.268 123.375 106.268 123.062V107.25C106.268 106.937 106.393 106.637 106.615 106.415C106.837 106.194 107.138 106.07 107.452 106.069H171.404C171.718 106.07 172.019 106.194 172.241 106.415C172.463 106.637 172.588 106.937 172.588 107.25V123.062C172.588 123.375 172.463 123.675 172.241 123.896C172.019 124.118 171.718 124.242 171.404 124.243V124.242ZM107.452 106.541C107.264 106.541 107.083 106.616 106.95 106.749C106.817 106.882 106.742 107.062 106.742 107.25V123.062C106.742 123.25 106.817 123.43 106.95 123.563C107.083 123.696 107.264 123.77 107.452 123.771H171.404C171.593 123.77 171.773 123.696 171.907 123.563C172.04 123.43 172.115 123.25 172.115 123.062V107.25C172.115 107.062 172.04 106.882 171.907 106.749C171.773 106.616 171.593 106.541 171.404 106.541H107.452Z" fill="#E6E6E6"/>
        <path d="M127.23 111.764C127.01 111.764 126.799 111.851 126.644 112.006C126.488 112.161 126.401 112.371 126.401 112.59C126.401 112.809 126.488 113.019 126.644 113.174C126.799 113.329 127.01 113.416 127.23 113.416H166.311C166.531 113.425 166.745 113.346 166.907 113.197C167.068 113.048 167.163 112.841 167.172 112.622C167.18 112.403 167.101 112.19 166.951 112.029C166.802 111.868 166.595 111.773 166.375 111.765C166.363 111.764 166.351 111.764 166.338 111.764H127.23L127.23 111.764Z" fill="#E6E6E6"/>
        <path d="M127.23 116.721C127.01 116.721 126.799 116.808 126.644 116.963C126.488 117.118 126.401 117.328 126.401 117.547C126.401 117.767 126.488 117.977 126.644 118.132C126.799 118.287 127.01 118.374 127.23 118.374H166.311C166.531 118.382 166.745 118.303 166.907 118.154C167.068 118.005 167.163 117.799 167.172 117.579C167.18 117.36 167.101 117.147 166.951 116.986C166.802 116.825 166.595 116.73 166.375 116.722C166.363 116.721 166.351 116.721 166.338 116.721H127.23L127.23 116.721Z" fill="#E6E6E6"/>
        <path d="M171.404 150.598H107.452C107.138 150.598 106.837 150.473 106.615 150.252C106.393 150.031 106.268 149.731 106.268 149.418V133.606C106.268 133.293 106.393 132.993 106.615 132.771C106.837 132.55 107.138 132.426 107.452 132.425H171.404C171.718 132.426 172.019 132.55 172.241 132.771C172.463 132.993 172.588 133.293 172.588 133.606V149.418C172.588 149.731 172.463 150.031 172.241 150.252C172.019 150.473 171.718 150.598 171.404 150.598ZM107.452 132.897C107.264 132.897 107.083 132.972 106.95 133.105C106.817 133.238 106.742 133.418 106.742 133.606V149.418C106.742 149.606 106.817 149.786 106.95 149.919C107.083 150.052 107.264 150.126 107.452 150.127H171.404C171.593 150.126 171.773 150.052 171.907 149.919C172.04 149.786 172.115 149.606 172.115 149.418V133.606C172.115 133.418 172.04 133.238 171.907 133.105C171.773 132.972 171.593 132.897 171.404 132.897H107.452Z" fill="#E6E6E6"/>
        <path d="M127.23 138.205C127.01 138.205 126.799 138.292 126.644 138.447C126.488 138.602 126.401 138.812 126.401 139.032C126.401 139.251 126.488 139.461 126.644 139.616C126.799 139.771 127.01 139.858 127.23 139.858H166.311C166.528 139.857 166.736 139.771 166.89 139.619C167.044 139.467 167.132 139.261 167.136 139.045C167.139 138.829 167.058 138.62 166.909 138.463C166.76 138.306 166.555 138.214 166.338 138.206H127.23V138.205Z" fill="#E6E6E6"/>
        <path d="M127.23 143.164C127.01 143.164 126.799 143.251 126.644 143.406C126.488 143.561 126.401 143.771 126.401 143.99C126.401 144.209 126.488 144.42 126.644 144.575C126.799 144.73 127.01 144.817 127.23 144.817H166.311C166.528 144.815 166.736 144.73 166.89 144.578C167.044 144.426 167.132 144.22 167.136 144.004C167.139 143.788 167.058 143.579 166.909 143.422C166.76 143.265 166.555 143.172 166.338 143.164H127.23V143.164Z" fill="#E6E6E6"/>
        <path d="M171.404 177.041H107.452C107.138 177.04 106.837 176.916 106.615 176.694C106.393 176.473 106.268 176.173 106.268 175.86V160.048C106.268 159.735 106.393 159.435 106.615 159.214C106.837 158.992 107.138 158.868 107.452 158.867H171.404C171.718 158.868 172.019 158.992 172.241 159.214C172.463 159.435 172.588 159.735 172.588 160.048V175.86C172.588 176.173 172.463 176.473 172.241 176.695C172.019 176.916 171.718 177.04 171.404 177.041V177.041ZM107.452 159.339C107.264 159.34 107.083 159.414 106.95 159.547C106.817 159.68 106.742 159.86 106.742 160.048V175.86C106.742 176.048 106.817 176.228 106.95 176.361C107.083 176.494 107.264 176.569 107.452 176.569H171.404C171.593 176.569 171.773 176.494 171.907 176.361C172.04 176.228 172.115 176.048 172.115 175.86V160.048C172.115 159.86 172.04 159.68 171.907 159.547C171.773 159.414 171.593 159.34 171.404 159.339H107.452Z" fill="#E6E6E6"/>
        <path d="M127.23 164.648C127.01 164.648 126.799 164.735 126.644 164.89C126.488 165.045 126.401 165.256 126.401 165.475C126.401 165.694 126.488 165.904 126.644 166.059C126.799 166.214 127.01 166.301 127.23 166.301H166.311C166.42 166.305 166.529 166.288 166.631 166.25C166.733 166.213 166.827 166.155 166.907 166.082C166.986 166.008 167.051 165.919 167.097 165.821C167.142 165.722 167.168 165.615 167.172 165.507C167.176 165.398 167.159 165.29 167.121 165.188C167.083 165.087 167.025 164.993 166.951 164.914C166.878 164.834 166.789 164.77 166.69 164.724C166.591 164.679 166.484 164.653 166.375 164.649C166.363 164.649 166.351 164.649 166.338 164.649H127.23L127.23 164.648Z" fill="#E6E6E6"/>
        <path d="M127.23 169.607C127.01 169.607 126.799 169.694 126.644 169.849C126.488 170.004 126.401 170.214 126.401 170.433C126.401 170.652 126.488 170.862 126.644 171.017C126.799 171.172 127.01 171.259 127.23 171.259H166.311C166.42 171.264 166.529 171.246 166.631 171.209C166.733 171.171 166.827 171.114 166.907 171.04C166.986 170.966 167.051 170.877 167.097 170.779C167.142 170.68 167.168 170.574 167.172 170.465C167.176 170.357 167.159 170.248 167.121 170.147C167.083 170.045 167.025 169.952 166.951 169.872C166.878 169.792 166.789 169.728 166.69 169.683C166.591 169.637 166.484 169.612 166.375 169.608C166.363 169.607 166.351 169.607 166.338 169.607H127.23L127.23 169.607Z" fill="#E6E6E6"/>
        <path d="M230.397 221H0.602997C0.26976 221 0 220.855 0 220.676C0 220.497 0.270071 220.352 0.602997 220.352H230.397C230.73 220.352 231 220.497 231 220.676C231 220.855 230.73 221 230.397 221Z" fill="#E6E6E6"/>
        <path d="M220.665 208.357C219.683 208.701 218.629 208.787 217.604 208.607C216.579 208.427 215.618 207.987 214.813 207.329C212.764 205.615 212.121 202.79 211.599 200.174L210.052 192.438L213.29 194.66C215.618 196.258 217.999 197.907 219.611 200.222C221.223 202.537 221.927 205.696 220.631 208.201" fill="#E6E6E6"/>
        <path d="M220.165 218.262C220.573 215.303 220.992 212.305 220.706 209.315C220.452 206.658 219.639 204.064 217.984 201.937C217.105 200.81 216.036 199.844 214.824 199.083C214.509 198.885 214.218 199.384 214.532 199.581C216.629 200.902 218.25 202.852 219.162 205.15C220.171 207.706 220.332 210.492 220.158 213.207C220.053 214.849 219.831 216.48 219.606 218.109C219.589 218.183 219.6 218.26 219.637 218.326C219.675 218.392 219.736 218.441 219.808 218.464C219.882 218.483 219.961 218.473 220.028 218.436C220.095 218.398 220.144 218.336 220.164 218.262H220.165Z" fill="#F2F2F2"/>
        <path d="M217.232 213.514C216.811 214.152 216.232 214.671 215.551 215.021C214.87 215.371 214.111 215.541 213.345 215.513C211.378 215.42 209.737 214.052 208.261 212.753L203.894 208.909L206.784 208.771C208.863 208.672 210.995 208.579 212.976 209.218C214.957 209.857 216.782 211.395 217.144 213.436" fill="#E6E6E6"/>
        <path d="M221.316 219.963C219.356 216.503 217.079 212.658 213.014 211.429C211.883 211.088 210.698 210.966 209.521 211.069C209.15 211.1 209.243 211.671 209.615 211.639C211.587 211.476 213.555 211.995 215.188 213.109C216.759 214.175 217.983 215.657 219.018 217.229C219.653 218.191 220.221 219.196 220.789 220.198C220.97 220.518 221.5 220.287 221.316 219.963Z" fill="#F2F2F2"/>
        <path d="M115.431 120.017C118.178 120.017 120.405 117.797 120.405 115.059C120.405 112.32 118.178 110.101 115.431 110.101C112.683 110.101 110.457 112.32 110.457 115.059C110.457 117.797 112.683 120.017 115.431 120.017Z" fill="#5F85DB"/>
        <path d="M113.049 114.133C112.992 114.133 112.946 114.503 112.946 114.959C112.946 115.415 112.992 115.785 113.049 115.785H117.94C117.998 115.793 118.045 115.429 118.046 114.973C118.078 114.689 118.043 114.401 117.944 114.133H113.049V114.133Z" fill="#E6E6E6"/>
        <path d="M115.431 146.47C118.178 146.47 120.405 144.25 120.405 141.512C120.405 138.774 118.178 136.554 115.431 136.554C112.683 136.554 110.457 138.774 110.457 141.512C110.457 144.25 112.683 146.47 115.431 146.47Z" fill="#5F85DB"/>
        <path d="M113.049 140.586C112.992 140.586 112.946 140.956 112.946 141.412C112.946 141.868 112.992 142.238 113.049 142.238H117.94C117.998 142.246 118.045 141.882 118.046 141.426C118.078 141.142 118.043 140.854 117.944 140.586H113.049V140.586Z" fill="#E6E6E6"/>
        <path d="M115.431 172.912C118.178 172.912 120.405 170.692 120.405 167.954C120.405 165.216 118.178 162.996 115.431 162.996C112.683 162.996 110.457 165.216 110.457 167.954C110.457 170.692 112.683 172.912 115.431 172.912Z" fill="#5F85DB"/>
        <path d="M113.049 167.028C112.992 167.028 112.946 167.398 112.946 167.854C112.946 168.31 112.992 168.681 113.049 168.681H117.94C117.998 168.688 118.045 168.324 118.046 167.868C118.078 167.584 118.043 167.296 117.944 167.028H113.049V167.028Z" fill="#E6E6E6"/>
        <path d="M132.145 53.8448L130.385 55.5992L145.126 70.2926L146.886 68.5382L132.145 53.8448Z" fill="white"/>
        <path d="M146.886 55.5992L145.126 53.8448L130.385 68.5382L132.145 70.2926L146.886 55.5992Z" fill="white"/>
        <path d="M28.0842 141.467C28.5154 141.315 28.9079 141.071 29.234 140.751C29.5601 140.431 29.812 140.044 29.9718 139.617C30.1317 139.19 30.1956 138.733 30.1591 138.278C30.1226 137.824 29.9865 137.383 29.7606 136.987L37.0928 128.655L31.3691 127.868L25.2838 135.9C24.6409 136.323 24.1758 136.966 23.9766 137.707C23.7775 138.449 23.8582 139.237 24.2033 139.924C24.5485 140.61 25.1342 141.146 25.8495 141.431C26.5648 141.715 27.3599 141.728 28.0842 141.467Z" fill="#9F616A"/>
        <path d="M36.9264 215.306L31.8127 215.306L29.3799 195.645L36.9273 195.645L36.9264 215.306Z" fill="#9F616A"/>
        <path d="M38.2308 220.248L21.7417 220.247V220.039C21.7418 218.342 22.418 216.715 23.6216 215.516C24.8252 214.316 26.4576 213.642 28.1597 213.642H28.1601L38.2311 213.642L38.2308 220.248Z" fill="#2F2E41"/>
        <path d="M63.6955 211.041L58.8117 212.552L50.6392 194.494L57.8472 192.264L63.6955 211.041Z" fill="#9F616A"/>
        <path d="M66.4115 215.374L50.6639 220.248L50.6021 220.049C50.0974 218.429 50.2591 216.675 51.0517 215.173C51.8442 213.672 53.2027 212.546 54.8282 212.042L54.8286 212.042L64.4467 209.066L66.4115 215.374Z" fill="#2F2E41"/>
        <path d="M33.0102 124.66L25.4365 133.306L31.3658 133.838L33.0102 124.66Z" fill="#E6E6E6"/>
        <path d="M30.051 135.804C30.051 135.804 27.4202 137.115 27.0914 143.016C26.7625 148.916 28.078 164.322 28.078 164.322C28.078 164.322 26.7628 171.206 28.078 177.433C29.3932 183.661 26.7628 206.277 28.4069 206.277C30.051 206.277 38.6006 207.26 38.9295 206.277C39.2584 205.293 39.5873 190.544 39.5873 190.544C39.5873 190.544 42.218 183.005 39.5873 178.417C39.5873 178.417 48.7726 194.404 54.7137 206.606C56.0139 209.276 65.8941 206.278 64.25 203.328C62.6059 200.378 58.6599 186.939 58.6599 186.939C58.6599 186.939 55.7003 177.105 50.4391 172.844L53.0699 151.866C53.0699 151.866 58.6602 137.772 55.3723 135.805C52.0845 133.839 30.051 135.804 30.051 135.804Z" fill="#2F2E41"/>
        <path d="M39.9159 82.3763C44.6377 82.3763 48.4655 78.5608 48.4655 73.8542C48.4655 69.1475 44.6377 65.3321 39.9159 65.3321C35.194 65.3321 31.3662 69.1475 31.3662 73.8542C31.3662 78.5608 35.194 82.3763 39.9159 82.3763Z" fill="#A0616A"/>
        <path d="M49.4521 83.032L38.8234 89.2597C38.8234 89.2597 34.7536 91.5442 33.2333 95.4874C31.6129 99.6898 32.5547 105.607 33.2333 106.96C34.5485 109.582 32.6817 116.137 32.6817 116.137L31.0376 131.215C31.0376 131.215 25.1186 136.787 29.7224 137.443C34.3261 138.098 42.5469 137.115 47.4795 137.443C52.4121 137.77 58.0021 138.426 56.358 135.148C54.7139 131.869 52.7409 129.575 54.7139 123.021C56.2578 117.891 56.1909 98.711 56.0889 90.611C56.0748 89.4986 55.7755 88.4083 55.2194 87.4439C54.6633 86.4794 53.8689 85.6727 52.9117 85.1006L49.4521 83.032Z" fill="#E5E5E5"/>
        <path opacity="0.1" d="M44.6855 93.3573L45.6719 113.352L36.1116 132.65L34.4902 132.035L44.3554 114.007L44.6855 93.3573Z" fill="black"/>
        <path opacity="0.1" d="M55.5356 117.612V115.317L44.3564 133.673L55.5356 117.612Z" fill="black"/>
        <path d="M33.8478 65.9595L32.4355 65.3963C32.4355 65.3963 35.3914 62.1531 39.5026 62.4351L38.346 61.166C38.346 61.166 41.1728 60.038 43.7429 62.9989C45.0939 64.5555 46.6567 66.3854 47.6322 68.4463H49.1459L48.5143 69.8329L50.7253 71.2196L48.4558 70.9715C48.6708 72.1686 48.5972 73.3994 48.2411 74.5626L48.3033 75.6587C48.3033 75.6587 45.6714 71.5992 45.6714 71.036V72.4462C45.6714 72.4462 44.2578 71.1771 44.2578 70.331L43.4868 71.3182L43.1013 69.7675L38.347 71.3182L39.1174 70.0485L36.1615 70.4715L37.318 68.9208C37.318 68.9208 33.9772 70.7537 33.8487 72.3051C33.7202 73.8564 32.05 75.8302 32.05 75.8302L31.279 74.42C31.279 74.42 30.1228 68.0747 33.8478 65.9595Z" fill="#2F2E41"/>
        <path d="M39.3795 142.395C39.7767 142.169 40.1194 141.859 40.3835 141.486C40.6475 141.114 40.8264 140.689 40.9076 140.24C40.9889 139.791 40.9704 139.33 40.8535 138.889C40.7367 138.449 40.5243 138.039 40.2313 137.689L45.9634 128.192L40.1905 128.43L35.6322 137.412C35.0747 137.941 34.7315 138.656 34.6676 139.421C34.6037 140.186 34.8235 140.948 35.2854 141.562C35.7473 142.177 36.4192 142.601 37.1737 142.754C37.9283 142.907 38.7131 142.78 39.3795 142.395Z" fill="#9F616A"/>
        <path d="M52.4122 87.2937L54.8783 86.8021C54.8783 86.8021 62.277 92.2104 59.9752 103.027C57.6733 113.844 47.4796 130.232 47.4796 130.232C47.4796 130.232 45.1771 133.183 44.5199 133.838C43.8628 134.493 42.547 133.838 43.2047 134.821C43.8625 135.805 42.2181 136.46 42.2181 136.46C42.2181 136.46 34.9836 136.46 35.6414 133.838C36.2992 131.216 47.4796 112.531 47.4796 112.531L45.8355 95.1589C45.8355 95.1589 44.5196 86.638 52.4122 87.2937Z" fill="#E5E5E5"/>
        </g>
        <defs>
        <clipPath id="clip0_2:17395">
        <rect width="231" height="221" fill="white"/>
        </clipPath>
        </defs>
        </svg>
        `}
        />
        <Text
          style={{
            fontSize: 20,
            fontWeight: SIZES.fontWeight3,
            color: COLORS.white,
            textAlign: 'center',
            marginTop: 19,
            marginBottom: 10,
          }}>
          TODO: SIGN UP RESTORE SCREEN
        </Text>
        <Text
          style={{
            fontSize: 20,
            fontWeight: SIZES.fontWeight0,
            color: COLORS.white,
            textAlign: 'center',
            marginBottom: 20,
          }}>
          Cтраницы на данный момент не существует, но в скором времени её
          добавим
        </Text>

        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.backToLogin}>Вернуться на страницу входа</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  backToLogin: {
    fontSize: SIZES.body6,
    fontWeight: SIZES.fontWeight1,
    color: COLORS.blue,
  },
});
