# Intro
I started this project with the aim of creating something that incorporates machine learning using a micro:bit I had at home. <br>
The goal is to use the Spotify API so that specific gestures can trigger actions like going back to the previous track, playing the next track, or adjusting the volume up and down.

<img src="https://github.com/user-attachments/assets/b23d943d-fa54-4ad5-afda-329d3551cf1a" alt="IMG_2807" width="50%"/>
<img src="https://github.com/user-attachments/assets/fc7138cb-e303-4894-8152-3bbc009396a8" width="50%"/>


# Technology
- microbit (Controller)
- Python 3.11 / HTML / JavaScript
- Web Bluetooth API
- Spotify API 
- Fourier Transform

# Flow

1. Data Collection (Accelerometer) from the microboard
2. Basic data analysis
3. Data preprocessing
4. Algorithm selection
5. Model training
6. Model validation
7. App creation using the Spotify API
8. Real-world testing

# Data Collection via Bluetooth

I collected the following gestures (data)
- up
- down
- right
- left
- circle
- shuffle

<img src="https://github.com/user-attachments/assets/e896b222-0f41-4d9a-958a-a97b49b2ef91" width="80%"/>
<img src="https://github.com/user-attachments/assets/fa6d0056-4bc1-4d2b-b354-b6dfd1d17703" width="80%"/>
<img src="https://github.com/user-attachments/assets/7ce1695e-7057-41f5-899b-aa41d7a951c0" width="80%"/>


# Evalation

### Currently Working on this part


| Model | Data    | Accuracy |
| :---:   | :---: | :---: |
| LSTM | Normal  | ?   |
|  | Normal + FFT  | ?  |
|  | Removed Noise + FFT  | ?   |
| Random Forest | Normal (mean, std, max, min)  | 0.66 |
|  | Normal + FFT (mean, std, max, min) | 0.56 |
|  | Removed Noise + FFT (mean, std, max, min) | 0.54 |


# Test
