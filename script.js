// script.js

// Function to animate task completion with confetti
function celebrateTaskCompletion(taskId) {
  const taskElement = document.querySelector(`[data-task-id="${taskId}"]`);
  if (!taskElement) return;

  taskElement.classList.add('completed');
  
  // Simple confetti effect using CSS animation
  const confetti = document.createElement('div');
  confetti.className = 'confetti';
  confetti.style.position = 'absolute';
  confetti.style.top = `${taskElement.getBoundingClientRect().top}px`;
  confetti.style.left = `${taskElement.getBoundingClientRect().left}px`;
  confetti.style.width = '100%';
  confetti.style.height = '100%';
  confetti.innerHTML = Array(20)
    .fill()
    .map(
      () => `
        <div style="
          position: absolute;
          width: 8px;
          height: 8px;
          background: ${['#9333ea', '#ec4899', '#22c55e'][Math.floor(Math.random() * 3)]};
          border-radius: 50%;
          animation: confettiFall ${Math.random() * 1 + 0.5}s ease-out;
          transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * -50}px);
        "></div>
      `
    )
    .join('');
  document.body.appendChild(confetti);

  setTimeout(() => confetti.remove(), 1500);
}

// Keyframe for confetti animation
const styleSheet = document.createElement('style');
styleSheet.textContent = `
  @keyframes confettiFall {
    0% { transform: translateY(-50px); opacity: 1; }
    100% { transform: translateY(100px); opacity: 0; }
  }
`;
document.head.appendChild(styleSheet);

// Smooth scroll to section
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

// Animate progress bar on update
function animateProgressBar(progressElement, percentage) {
  progressElement.style.width = '0%';
  setTimeout(() => {
    progressElement.style.width = `${percentage}%`;
  }, 100);
}

// Add tooltips dynamically (example)
function addTooltip(element, text) {
  const tooltip = document.createElement('div');
  tooltip.className = 'tooltip';
  tooltip.textContent = text;
  tooltip.style.position = 'absolute';
  tooltip.style.background = '#9333ea';
  tooltip.style.color = 'white';
  tooltip.style.padding = '4px 8px';
  tooltip.style.borderRadius = '4px';
  tooltip.style.fontSize = '12px';
  tooltip.style.opacity = '0';
  tooltip.style.transition = 'opacity 0.2s ease';

  element.addEventListener('mouseenter', (e) => {
    const rect = element.getBoundingClientRect();
    tooltip.style.top = `${rect.top - 30}px`;
    tooltip.style.left = `${rect.left + rect.width / 2}px`;
    tooltip.style.transform = 'translateX(-50%)';
    tooltip.style.opacity = '1';
    document.body.appendChild(tooltip);
  });

  element.addEventListener('mouseleave', () => {
    tooltip.style.opacity = '0';
    setTimeout(() => tooltip.remove(), 200);
  });
}

// Example usage in your React component:
// You'd need to integrate these with useEffect or event handlers in your React code.
