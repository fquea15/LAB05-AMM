<View style={styles.container}>
      <Text>Hola mundo</Text>
      <Image
        source={{uri: selectedImage !== null
          ? selectedImage.localUri : "https://c4.wallpaperflare.com/wallpaper/596/53/252/spider-man-the-amazing-spider-man-logo-red-wallpaper-thumb.jpg"

        }}
        style={styles.image}

      />
      <TouchableOpacity
        onPress={openImagePAsy}
        style={styles.button}
      >
        <Text style={styles.btntxt} >
          Presiona Aqui
        </Text>

      </TouchableOpacity>


      
      
      </View>