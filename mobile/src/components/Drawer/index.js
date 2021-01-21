import React from 'react';
import {View, StyleSheet} from 'react-native';
import {
  useTheme,
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from 'react-native-paper';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/FontAwesome'

export function DrawerContent(props) {
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View
              style={{
                flexDirection: 'row',
                marginTop: 15,
              }}>
              <Avatar.Image
                source={{
                  uri:
                    'https://scontent.fpoa28-1.fna.fbcdn.net/v/t1.0-9/101185565_2178567235621824_7001971009553170432_o.jpg?_nc_cat=101&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeGAWX2xdunHhW9_tOCnGlkIPMIS3sk_jW88whLeyT-Nb2P7ye8AzZriP_bwlsxZ3pRamgeiNLdVVyu_jXF_X7oE&_nc_ohc=g9Bg4xGlqv4AX_BCYTN&_nc_ht=scontent.fpoa28-1.fna&oh=97d12b7ea1b113acf11550b8aaf59ea8&oe=6029BF95',
                }}
                size={50}
              />
              <View
                style={{
                  marginLeft: 15,
                  flexDirection: 'column',
                }}>
                <Title style={styles.title}>Nome do usuario</Title>
                <Caption style={styles.caption}>@username</Caption>
              </View>
            </View>
            <Drawer.Section style={styles.drawerSection}>
              <DrawerItem 
              icon={({color, size}) => (
                <Icon name="bookmark-o" color={color} size={size} />
              )}
              label="SALVOS" onPress={() => {}} />
              <DrawerItem 
              icon={({color, size}) => (
                <Icon name="gear" color={color} size={size} />
              )}
              label="CONFIGURAÇÕES" onPress={() => {}} />
              <DrawerItem 
              icon={({color, size}) => (
                <Icon name="user-plus" color={color} size={size} />
              )}
              label="ENCONTRAR PESSOAS" onPress={() => {}} />
            </Drawer.Section>
          </View>
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem 
        label="SAIR" onPress={() => {}} />
      </Drawer.Section>
    </View>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
