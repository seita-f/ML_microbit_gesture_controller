# Intro
I started this project with the aim of creating something that incorporates machine learning using a micro:bit I had at home. <br>
The goal is to recognize the specific gestures.

<img src="https://github.com/user-attachments/assets/9c759aec-986d-469e-ba4a-92731a23bf3e" alt="IMG_2807" width="50%"/>


# Technology
- microbit (Controller)
- Python 3.11 (& ML libraries)
- HTML/CSS/JS
- Web Bluetooth API

# Flow

1. Data Collection (Accelerometer) from the microboard
2. Basic data analysis
3. Data preprocessing
4. Algorithm selection
5. Model training
6. Model validation

# Data Collection via Bluetooth

![Screen Shot 2025-01-01 at 19 49 05](https://github.com/user-attachments/assets/30b4fc00-7d83-485b-a3ec-2401e4ae9b3a)

I collected the following gestures (data)
- up
- down
- right
- left
- circle
- shuffle

<img src="https://github.com/user-attachments/assets/e896b222-0f41-4d9a-958a-a97b49b2ef91" width="80%"/>
<img src="https://github.com/user-attachments/assets/3c1d764a-030f-42a2-b3ee-4da13b2dee7a" width="80%"/>
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
