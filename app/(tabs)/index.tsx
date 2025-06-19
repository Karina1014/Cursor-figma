import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { Dimensions, Image as RNImage, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const { width } = Dimensions.get('window');

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      {/* Header curvo abstracto */}
      <View style={styles.svgHeaderContainer}>
        <Svg height={130} width={width} style={StyleSheet.absoluteFill}>
          {/* Curva roja intensa, visible como franja debajo del azul */}
          <Path
           d={`M${width},18 Q${width * 0.40},38 0,128 L0,113 Q${width * 0.40},20 ${width},0 Z`}
            fill="#C02126"
          />
          {/* Curva azul celeste brillante */}
          <Path
            d={`M${width},0 Q${width * 0.40},20 0,113 L0,0 Z`}
            fill="#0076BD"
          />
        </Svg>
        {/* Icono campana */}
        <View style={styles.bellIconContainer}>
          <MaterialCommunityIcons name="bell-outline" size={26} color="#fff" />
        </View>
        {/* Dark Mode y luna dentro del área azul, alineados a la derecha */}
        <View style={styles.darkModeContainerInBlue}>
         
          <Text style={styles.darkModeText}>Dark Mode</Text>
          <MaterialCommunityIcons name="moon-waning-crescent" size={22} color="#fff" style={{ marginLeft: 4 }} />
        </View>
      </View>
      {/* Logo centrado debajo de las curvas */}
      <View style={styles.logoContainer}>
        <RNImage
          source={require('@/assets/images/Logouce.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>
      {/* Bienvenida y usuario */}
      <View style={styles.welcomeSection}>
        <Text style={styles.welcomeTitle}>Bienvenido al Sistema{"\n"}Académico</Text>
        <View style={styles.userRow}>
          <MaterialIcons name="person" size={20} color="#222" />
          <Text style={styles.userName}>Karina Simbaña</Text>
        </View>
        {/* Banner central */}
        <View style={styles.bannerContainer}>
          <RNImage
            source={require('@/assets/images/fondoQ.png')}
            style={styles.bannerImg}
            resizeMode="cover"
          />
        </View>
      </View>
      {/* Acciones frecuentes */}
      <View style={styles.actionsSection}>
        <Text style={styles.actionsTitle}>ACCIONES MAS FRECUENTES</Text>
        <View style={styles.actionsGrid}>
          <ActionIcon icon={<MaterialCommunityIcons name="file-document-edit-outline" size={28} color="#222" />} label="Matrícula" />
          <ActionIcon icon={<MaterialCommunityIcons name="bus" size={28} color="#222" />} label="Transporte" />
          <ActionIcon icon={<MaterialCommunityIcons name="file-cog-outline" size={28} color="#222" />} label="Procesos" />
          <ActionIcon icon={<MaterialCommunityIcons name="briefcase-outline" size={28} color="#222" />} label="Oportunidades" />
          <ActionIcon icon={<MaterialCommunityIcons name="map-marker-outline" size={28} color="#222" />} label="Croquis UCE" />
          <ActionIcon icon={<MaterialCommunityIcons name="calendar-check-outline" size={28} color="#222" />} label="Actividades" />
          <ActionIcon icon={<MaterialCommunityIcons name="notebook-outline" size={28} color="#222" />} label="Apuntes" />
          <ActionIcon icon={<MaterialCommunityIcons name="help-circle-outline" size={28} color="#222" />} label="¿Necesitas Ayuda?" />
        </View>
      </View>
      {/* Pajarito en la esquina inferior derecha */}
      <RNImage
        source={require('@/assets/images/pajarito.png')}
        style={styles.birdCorner}
        resizeMode="contain"
      />
      {/* Barra de navegación inferior visual */}
      <View style={styles.bottomNav}>
        <NavIcon icon={<MaterialCommunityIcons name="calendar" size={28} color="#fff" />} label="Horario" />
        <NavIcon icon={<MaterialCommunityIcons name="card-account-details-outline" size={28} color="#fff" />} label="Carnet" />
        <NavIcon icon={<MaterialCommunityIcons name="home" size={28} color="#fff" />} label="Home" />
        <NavIcon icon={<MaterialCommunityIcons name="book-open-page-variant" size={28} color="#fff" />} label="Mis Cursos" />
        <NavIcon icon={<MaterialCommunityIcons name="account" size={28} color="#fff" />} label="Perfil" />
      </View>
    </View>
  );
}

function ActionIcon({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <TouchableOpacity style={styles.actionItem}>
      {icon}
      <Text style={styles.actionLabel}>{label}</Text>
    </TouchableOpacity>
  );
}

function NavIcon({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <View style={styles.navItem}>
      {icon}
      <Text style={styles.navLabel}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  svgHeaderContainer: {
    height: 130,
    backgroundColor: 'transparent',
    position: 'relative',
    justifyContent: 'center',
  },
  bellIconContainer: {
    position: 'absolute',
    top: 18,
    left: 18,
    zIndex: 10,
    backgroundColor: 'transparent',
  },
  darkModeContainerInBlue: {
    position: 'absolute',
    top: 18,
    right: 18,
    flexDirection: 'row',
    alignItems: 'center',
    zIndex: 10,
    backgroundColor: 'transparent',
  },
  darkModeText: {
    color: '#222',
    fontWeight: '600',
    fontSize: 15,
    marginRight: 2,
    marginTop: 20,
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: -30,
    marginBottom: 16,
  },
  logo: {
    width: 90,
    height: 90,
  },
  welcomeSection: {
    alignItems: 'center',
    marginTop: 8,
    marginBottom: 8,
  },
  welcomeTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1a237e',
    textAlign: 'center',
    marginBottom: 8,
  },
  userRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginBottom: 8,
  },
  userName: {
    fontSize: 16,
    color: '#222',
    marginLeft: 4,
  },
  bannerContainer: {
    width: width * 0.85,
    height: 140,
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 8,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    elevation: 2,
  },
  bannerImg: {
    ...StyleSheet.absoluteFillObject,
    width: '120%',
    height: '120%',
    borderRadius: 10,
  },
  actionsSection: {
    backgroundColor: '#f2f2f2',
    borderRadius: 16,
    marginHorizontal: 8,
    padding: 12,
    marginBottom: 8,
    elevation: 1,
  },
  actionsTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 8,
    letterSpacing: 0.5,
  },
  actionsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 8,
  },
  actionItem: {
    width: '23%',
    aspectRatio: 1,
    backgroundColor: '#fff',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
    elevation: 2,
    padding: 4,
  },
  actionLabel: {
    fontSize: 11,
    color: '#222',
    textAlign: 'center',
    marginTop: 4,
  },
  birdCorner: {
    width: 60,
    height: 60,
    position: 'absolute',
    right: 8,
    bottom: 64,
    zIndex: 10,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#0076BD',
    height: 56,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    elevation: 10,
  },
  navItem: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  navLabel: {
    fontSize: 10,
    color: '#fff',
    marginTop: 2,
  },
});